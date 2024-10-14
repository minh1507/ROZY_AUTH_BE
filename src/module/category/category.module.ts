import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './schemas/category.entity';
import { CategoryController } from './controller/category.controller';
import { CategoryService } from './service/category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
