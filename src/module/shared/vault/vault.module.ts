import { Module } from '@nestjs/common';
import { VaultConfigService } from './vault.service';

@Module({
  providers: [VaultConfigService],
  exports: [VaultConfigService],
})
export class VaultModule {}
