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
  @IsNotEmpty({
    message: 'Mã không được để trống',
  })
  @MaxLength(25, {
    message: 'Mã không được vượt quá 25 ký tự',
  })
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
  @IsNotEmpty({
    message: 'Mã không được để trống',
  })
  @MaxLength(100, {
    message: 'Tên không được vượt quá 100 ký tự',
  })
  @Column('varchar', {
    length: 100,
    nullable: false,
  })
  name: string;

  @Column('boolean', { default: false })
  isFreeze?: boolean;
}
