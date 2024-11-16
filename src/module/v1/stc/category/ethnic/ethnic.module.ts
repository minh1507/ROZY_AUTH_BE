import { Module } from '@nestjs/common';
import { EthnicService } from './service/ethnic.service';
import { EthnicController } from './controller/ethnic.controller';

@Module({
  imports: [],
  controllers: [EthnicController],
  providers: [EthnicService],
  exports: [EthnicService]
})
export class EthnicModule {}
