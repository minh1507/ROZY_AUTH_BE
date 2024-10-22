import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { Product } from '../schemas/product.entity';

export class CreateProductDto extends OmitType(Product, ['id', 'file']) {
  @ApiProperty({
    description: 'Id file',
    example: 1,
    required: true,
  })
  fileId: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
