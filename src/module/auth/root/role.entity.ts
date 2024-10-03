import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/base/entity.base';
import { User } from './user.entity';

@Entity()
export class Role extends BaseEntity {
  // swagger
  @ApiProperty({
    description: 'name',
    maxLength: 100,
  })

  // validate
  @IsString()
  @MaxLength(100)

  //entity
  @Column('varchar', { length: 100})
  name: string;

  @OneToMany(() => User, (item) => item.role)
  user: User[];
}
