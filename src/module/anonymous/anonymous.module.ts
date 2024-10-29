import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anonymous } from './schemas/anonymous.entity';
import { AnonymousController } from './controller/anonymous.controller';
import { AnonymousService } from './service/anonymous.service';

@Module({
  imports: [TypeOrmModule.forFeature([Anonymous])],
  controllers: [AnonymousController],
  providers: [AnonymousService]
})
export class AnonymousModule {}
