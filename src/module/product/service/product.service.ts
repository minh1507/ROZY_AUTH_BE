import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomBadRequestException } from 'src/common/exeption/bad-request.exeption';
import { Product } from '../schemas/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { File } from 'src/module/file/schemas/file.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    protected productRepository: Repository<Product>,

    @InjectRepository(File)
    protected fileRepository: Repository<File>,
  ) {}

  async list() {
    return await this.productRepository.find({
      relations: {
        file: true
      },
      order: {
        id: 'DESC',
      },
    });
  }

  async detail(id: number) {
    return await this.productRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(request: CreateProductDto) {
    const file = await this.fileRepository.findOne({
      where: {
        id: request.fileId as number,
      },
    });

    this.productRepository.save({
      title: request.title,
      oldPrice: request.oldPrice,
      newPrice: request.newPrice,
      description: request.description,
      file: file,
    } as Product);
  }

  async update(request: UpdateProductDto, id: number) {
    const product = await this.productRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!product) {
      return new CustomBadRequestException('Sản phẩm không tồn tại');
    }

    product.title = request.title as string;
    product.oldPrice = request.oldPrice as number;
    product.newPrice = request.newPrice as number;
    product.description = request.description
      ? (request.description as string)
      : product.description;

    this.productRepository.save(product);
  }

  async delete(id: number) {
    const product = await this.productRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!product) {
      return new CustomBadRequestException('Sản phẩm không tồn tại');
    }

    this.productRepository.delete(product);
  }
}