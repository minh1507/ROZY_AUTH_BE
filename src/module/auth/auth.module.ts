import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controller/auth.controller';
import { User } from '../user/schemas/user.entity';
import { Role } from '../role/schemas/role.entity';
import { AuthService } from './service/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
