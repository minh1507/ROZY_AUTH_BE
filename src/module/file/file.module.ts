import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './schemas/file.entity';
import { FileController } from './controller/file.controller';
import { FileService } from './service/file.service';
import { Product } from '../product/schemas/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([File, Product])],
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {}
