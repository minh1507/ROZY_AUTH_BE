import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/module/share/logger/logger.service';
import { EthnicRepository } from './ethnic.repository';
import { Ethnic } from './ethnic.entity';

@Injectable()
export class EthnicService {
  constructor(
    private readonly logger: LoggerService,
    private readonly ethnicRepository: EthnicRepository,
  ) {}

  public find = async (): Promise<Ethnic[]> => {
    this.logger.trace(`[SERVICE] Start find all ethnic`);

    const result = await this.ethnicRepository.find();

    return result;
  };
}
