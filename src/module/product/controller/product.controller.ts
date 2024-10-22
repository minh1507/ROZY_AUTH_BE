import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagEnum } from 'src/common/enum/tag.enum';
import { SuccessResponse } from 'src/common/response/success.response';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { ProductService } from '../service/product.service';

@Controller('product')
@ApiTags(TagEnum.PRODUCT)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async list() {
    const data = await this.productService.list();
    return SuccessResponse.response(data);
  }

  @Get(':id')
  async detail(@Param('id') id: string) {
    const data = await this.productService.detail(+id);
    return SuccessResponse.response(data);
  }

  @Post()
  create(@Body() request: CreateProductDto) {
    this.productService.create(request);
    return SuccessResponse.base();
  }

  @Patch(':id')
  update(@Body() request: UpdateProductDto, @Param('id') id: string) {
    this.productService.update(request, +id);
    return SuccessResponse.base();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.productService.delete(+id);
    return SuccessResponse.base();
  }
}
