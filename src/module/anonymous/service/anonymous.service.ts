import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { File } from '../schemas/file.entity';
import { Repository } from 'typeorm';
import { MinioService } from 'src/module/minio/minio.service';
import { Product } from 'src/module/product/schemas/product.entity';
import { Anonymous } from '../schemas/anonymous.entity';
import { CreateAnonymousDto, UpdateAnonymousDto } from '../dto/anonymous.dto';
import { CustomBadRequestException } from 'src/common/exeption/bad-request.exeption';

@Injectable()
export class AnonymousService {
    constructor(
        @InjectRepository(Anonymous)
        protected anonymousRepository: Repository<Anonymous>,
    ) { }

    async list() {
        return await this.anonymousRepository.find({
            order: {
                id: "DESC"
            }
        })
    }

    async detail(id: number) {
        return await this.anonymousRepository.findOne({
            where: {
                id: id
            }
        })
    }

    async create(
        request: CreateAnonymousDto,
    ) {
        this.anonymousRepository.save(request)
    }

    async update(
        request: UpdateAnonymousDto,
        id: number
    ) {
        const anonymous = await this.anonymousRepository.findOne({
            where: {
                id: id
            }
        })

        if (!anonymous) {
            return new CustomBadRequestException("Khách hàng không tồn tại")
        }

        anonymous.name = request.name as string
        anonymous.email = request.email as string
        anonymous.description = request.description as string
        anonymous.descriptionDelivery = request.description as string
        anonymous.description = request.description as string

        this.anonymousRepository.save(anonymous)
    }

    async delete(
        id: number
    ) {
        const anonymous = await this.anonymousRepository.findOne({
            where: {
                id: id
            }
        })

        if (!anonymous) {
            return new CustomBadRequestException("Khách hàng không tồn tại")
        }

        this.anonymousRepository.delete(anonymous)
    }
}
