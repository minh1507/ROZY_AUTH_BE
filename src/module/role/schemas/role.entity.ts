import { Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/base/entity.base';
import { User } from '../../user/schemas/user.entity';

@Entity()
export class Role extends BaseEntity {
  @OneToMany(() => User, (item) => item.role)
  user: User[];
}
