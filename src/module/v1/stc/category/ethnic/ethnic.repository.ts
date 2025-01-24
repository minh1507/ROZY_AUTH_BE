import { Injectable } from '@nestjs/common';
import { Ethnic } from './ethnic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EthnicRepository {
  @InjectRepository(Ethnic)
  private repository: Repository<Ethnic>;

  public find = async (): Promise<Ethnic[]> => {
    return await this.repository.find();
  };
}
