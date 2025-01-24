import { Module } from '@nestjs/common';
import { EthnicService } from './ethnic.service';
import { EthnicController } from './ethnic.controller';
import { EthnicRepository } from './ethnic.repository';
import { Ethnic } from './ethnic.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ethnic])],
  controllers: [EthnicController],
  providers: [EthnicService, EthnicRepository],
  exports: [EthnicService],
})
export class EthnicModule {}
