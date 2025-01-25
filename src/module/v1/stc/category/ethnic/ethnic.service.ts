import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/module/share/logger/logger.service';
import { EthnicRepository } from './ethnic.repository';
import { Ethnic } from './ethnic.entity';
import { FindDto } from './ethnic.dto';
import { PaginationResult } from 'src/module/v1/base/dto.base';

@Injectable()
export class EthnicService {
  constructor(
    private readonly logger: LoggerService,
    private readonly ethnicRepository: EthnicRepository,
  ) {}

  public find = async (param: FindDto): Promise<PaginationResult<Ethnic>> => {
    this.logger.trace(`[SERVICE] Start find all ethnics`);

    const result = await this.ethnicRepository.find(param);

    return result;
  };
}
