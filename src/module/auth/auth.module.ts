import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './root/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
})
export class AuthModule {}
