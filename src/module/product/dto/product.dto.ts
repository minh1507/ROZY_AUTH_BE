import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { Product } from '../schemas/product.entity';

export class CreateProductDto extends OmitType(Product, ['id', 'file', 'category']) {
  @ApiProperty({
    description: 'Id file',
    example: 1,
    required: true,
  })
  fileId: number;

  @ApiProperty({
    description: 'Id category',
    example: 1,
    required: true,
  })
  categoryId: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
