import { Module } from '@nestjs/common';
import { TransModule } from './trans/trans.module';
import { V1Module } from './v1/v1.module';

@Module({
  imports: [
    V1Module,
    TransModule
  ],
})
export class STCModule {}
