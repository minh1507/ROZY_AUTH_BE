import { Module } from '@nestjs/common';
import { SharedModule } from './module/share/shared.module';
import { STSModule } from './module/server-to-server/sts.module';
import { STCModule } from './module/server-to-client/stc.module';

@Module({
  imports: [
    SharedModule,
    STSModule,
    STCModule
  ],
})
export class AppModule {}
