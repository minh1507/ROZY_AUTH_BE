import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './root/user.entity';
import { Role } from './root/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
})
export class AuthModule {}
