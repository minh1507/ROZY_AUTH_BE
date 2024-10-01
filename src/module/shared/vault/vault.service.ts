import { Injectable, OnModuleInit } from '@nestjs/common';
import vault from 'node-vault';

@Injectable()
export class VaultConfigService implements OnModuleInit {
  private vaultClient: any;
  private config: Record<string, any> = {};

  constructor() {
    this.vaultClient = vault({
      apiVersion: 'v1',
      endpoint: process.env.VAULT_ENDPOINT || 'http://127.0.0.1:8200',
      token: process.env.VAULT_TOKEN,
    });
  }

  async onModuleInit() {
    await this.loadSecrets();
  }

  async loadSecrets() {
    try {
      const databaseSecret = await this.vaultClient.read('secret/SA/database');

      // Store the fetched secrets in memory
      this.config = {
        ...this.config,
        database: databaseSecret.data,
      };

      console.log('Vault secrets loaded successfully.');
    } catch (error) {
      console.error('Error loading secrets from Vault:', error);
      throw error;
    }
  }

  get(key: string) {
    return this.config[key];
  }

  async getSecret(secretPath: string): Promise<any> {
    const secret = await this.vaultClient.read(secretPath);
    return secret.data;
  }
}
