import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class VaultService {
  constructor(
    @Inject('VAULT_CLIENT') private readonly vaultClient: any
  ) {}

  async getSecret(): Promise<any> {
    try {
      const secret = await this.vaultClient.read("secret/data/ROZY_AUTH");
      const secretData = secret.data.data;

      return secretData;
    } catch (error) {
      console.error('Error fetching secret from Vault:', error);
      throw new Error('Vault secret fetch error');
    }
  }
}
