import { Module } from '@nestjs/common';
import { EthnicModule } from './category/ethnic/ethnic.module';

@Module({
  imports: [
    EthnicModule
  ],
})
export class STCModule {}
