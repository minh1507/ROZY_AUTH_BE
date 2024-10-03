import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ethnic } from './root/ethnic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ethnic])],
})
export class AuthModule {}
