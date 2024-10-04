import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controller/auth.controller';
import { User } from './schemas/user.entity';
// import { Role } from './schemas/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController]
})
export class AuthModule {}
