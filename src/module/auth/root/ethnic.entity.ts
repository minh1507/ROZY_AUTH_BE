import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/base/entity.base';

@Entity()
export class Ethnic extends BaseEntity {
  // swagger
  @ApiProperty({
    description: 'Code',
    maxLength: 1000,
  })

  // validate
  @IsString()
  @MaxLength(100)

  //entity
  @Column('varchar', { length: 1000})
  code: string;

  // swagger
  @ApiProperty({
    description: 'Name',
    maxLength: 1000,
  })

  // validate
  @IsString()
  @MaxLength(100)

  //entity
  @Column('varchar', { length: 100})
  name: string;
}
