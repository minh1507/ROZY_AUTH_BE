import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { Product } from '../schemas/product.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto extends OmitType(Product, ['id', 'file', 'category']) {
  @ApiProperty({
    description: 'Id file',
    example: 1,
    required: true,
  })
  @IsNotEmpty()
  fileId: number;

  @ApiProperty({
    description: 'Id category',
    example: 1,
    required: true,
  })
  @IsNotEmpty()
  categoryId: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class ListProductDto{
  @ApiProperty({
    name: 'categoryId',
    required: false
  })
  @IsOptional()
  categoryId?: number;
}
