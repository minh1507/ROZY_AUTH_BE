import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export abstract class RootEntity {
  // swagger
  @ApiProperty({
    description: 'Id',
    minimum: 1,
  })
  // validate
  @IsNumber({})
  @ApiProperty({
    description: 'Id',
  })
  // entity
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at', nullable: true, select: false })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true, select: false })
  updatedAt?: Date;
}
