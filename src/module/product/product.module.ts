import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './schemas/product.entity';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';
import { File } from '../file/schemas/file.entity';
import { Category } from '../category/schemas/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, File, Category])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
