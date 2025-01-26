import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { Column } from 'typeorm';
import { RootEntity } from './rootEntity.base';

export abstract class BaseEntity extends RootEntity {
  @ApiProperty({
    description: 'Mã',
    example: 'Mã 1',
    maxLength: 25,
  })
  @IsNotEmpty()
  @MaxLength(25)
  @Column('varchar', {
    length: 25,
    nullable: false,
    unique: true,
  })
  code: string;

  @ApiProperty({
    description: 'Tên',
    example: 'Tên 1',
    maxLength: 100,
  })
  @IsNotEmpty()
  @MaxLength(100)
  @Column('varchar', {
    length: 100,
    nullable: false,
  })
  name: string;

  @Column('boolean', { default: true })
  displayIconCreate?: boolean;

  @Column('boolean', { default: true })
  displayIconUpdate?: boolean;

  @Column('boolean', { default: true })
  displayIconDelete?: boolean;

  @Column('boolean', { default: true })
  displayIconDetail?: boolean;
}
