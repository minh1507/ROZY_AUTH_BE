import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './schemas/file.entity';
import { FileController } from './controller/file.controller';
import { FileService } from './service/file.service';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {}
