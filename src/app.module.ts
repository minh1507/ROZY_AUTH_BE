import { Module } from '@nestjs/common';
import { SharedModule } from './module/share/shared.module';
import { V1Module } from './module/v1/v1.module';

@Module({
  imports: [
    SharedModule,
    V1Module
  ],
})
export class AppModule {}
