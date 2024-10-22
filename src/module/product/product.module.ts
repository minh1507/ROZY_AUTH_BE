import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './schemas/product.entity';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';
import { File } from '../file/schemas/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, File])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
