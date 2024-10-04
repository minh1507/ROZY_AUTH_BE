import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controller/auth.controller';
import { User } from './entity/user.entity';
import { Role } from './entity/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  controllers: [AuthController]
})
export class AuthModule {}
