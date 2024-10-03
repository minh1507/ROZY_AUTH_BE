import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/base/entity.base';

@Entity()
export class User extends BaseEntity {
  // swagger
  @ApiProperty({
    description: 'Code',
    maxLength: 100,
  })

  // validate
  @IsString()
  @MaxLength(100)

  //entity
  @Column('varchar', { length: 100})
  username: string;

  // swagger
  @ApiProperty({
    description: 'Code',
    maxLength: 100,
  })

  // validate
  @IsString()
  @MaxLength(100)

  //entity
  @Column('varchar', { length: 100})
  password: string;
}
