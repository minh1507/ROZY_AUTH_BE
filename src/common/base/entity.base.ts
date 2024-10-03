import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';
import { Column } from 'typeorm';
import { RootEntity } from './rootEntity.base';

export abstract class BaseEntity extends RootEntity {
  @ApiProperty({
    description: 'Mã',
    example: 'Mã 1',
    maxLength: 25,
  })
  @MaxLength(25)
  @Column('varchar', {
    length: 25,
    nullable: false,
  })
  code: string;

  @ApiProperty({
    description: 'Tên',
    example: 'Tên 1',
    maxLength: 100,
  })
  @MaxLength(100)
  @Column('varchar', {
    length: 100,
    nullable: false,
  })
  name: string;

  @Column('boolean', { default: false })
  isFreeze?: boolean;
}
