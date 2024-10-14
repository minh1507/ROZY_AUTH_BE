import { IsNotEmpty, IsString, MaxLength, ValidateNested } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { RelationTypeBase } from '../../../common/base/class.base';
import { Type } from 'class-transformer';
import { Role } from '../../role/schemas/role.entity';
import { RootEntity } from '../../../common/base/rootEntity.base';
import { ApiProperty, PickType } from '@nestjs/swagger';

@Entity()
export class User extends RootEntity {
  // swagger
  @ApiProperty({
    description: 'Code',
    maxLength: 100,
  })

  // validate
  @IsNotEmpty({
    message: "Tài khoản không được để trống"
  })
  @MaxLength(100,{
    message: "Tài khoản phải nhỏ hơn hoặc bằng 100 ký tự"
  })

  //entity
  @Column('varchar', { length: 100})
  username: string;

  // swagger
  @ApiProperty({
    description: 'Code',
    maxLength: 100,
  })

  // validate
  @IsNotEmpty({
    message: "Mật khẩu không được để trống"
  })
  @MaxLength(100, {
    message: "Mật khẩu phải nhỏ hơn hoặc bằng 100 ký tự"
  })

  //entity
  @Column('varchar', { length: 100})
  password: string;

  // swagger
  @ApiProperty({
    description: 'Role',
    type: RelationTypeBase,
  })
  // validate
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PickType(Role, ['id']))
  // entity
  @ManyToOne(() => Role, (item) => item.user)
  @JoinColumn()
  role: Role;
}
