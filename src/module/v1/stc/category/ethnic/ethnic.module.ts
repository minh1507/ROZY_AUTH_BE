import { Module } from '@nestjs/common';
import { EthnicService } from './ethnic.service';
import { EthnicController } from './ethnic.controller';

@Module({
  imports: [],
  controllers: [EthnicController],
  providers: [EthnicService],
  exports: [EthnicService],
})
export class EthnicModule {}
