import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anonymous } from './schemas/anonymous.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Anonymous])],
  controllers: [],
  providers: []
})
export class AnonymousModule {}
