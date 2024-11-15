import { Module } from '@nestjs/common';
import { HealthModule } from './trans/trans.module';

@Module({
  imports: [
    HealthModule
  ],
})
export class STCModule {}
