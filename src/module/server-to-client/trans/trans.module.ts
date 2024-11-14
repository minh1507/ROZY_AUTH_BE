import { Module } from '@nestjs/common';
import { TransController } from './controller/trans.controller';
import { TransService } from './service/trans.service';

@Module({
  imports: [],
  controllers: [TransController],
  providers: [TransService],
  exports: [TransService]
})
export class HealthModule {}
