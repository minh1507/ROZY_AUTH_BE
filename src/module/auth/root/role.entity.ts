import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/base/entity.base';
import { User } from './user.entity';

@Entity()
export class Role extends BaseEntity {
  @OneToMany(() => User, (item) => item.role)
  user: User[];
}
