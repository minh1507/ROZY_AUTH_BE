import { Module } from '@nestjs/common';
import { TransModule } from './trans/trans.module';

@Module({
  imports: [
    TransModule
  ],
})
export class STCModule {}
