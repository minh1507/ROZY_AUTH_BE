import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from '../schemas/file.entity';
import { Repository } from 'typeorm';
import { MinioService } from 'src/module/minio/minio.service';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    protected fileRepository: Repository<File>,

    private readonly minioService: MinioService,
  ) {}

  async upload(file: Express.Multer.File) {
    const key = await this.minioService.createFile(file, true, 'file');

    const saveFile = await this.fileRepository.save({
      file: key,
      originName: this.minioService.originalName(file.originalname),
      mimetype: file.mimetype,
    });

    return saveFile
  }

  async url(id: string) {
    return await this.minioService.findUrlFile(id, 'file')
  }
}
