import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export abstract class RootEntity {
  @ApiProperty({
    description: 'Id',
    minimum: 1,
  })
  @IsNumber({})
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at', nullable: true, select: false })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true, select: false })
  updatedAt?: Date;
}
