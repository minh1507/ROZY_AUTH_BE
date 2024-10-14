import { Injectable } from '@nestjs/common';
import { CreateAcademicDegreeDto, UpdateAcademicDegreeDto, QueryAcademicDegreeDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { AcademicDegree } from './entities';
import { BaseCategoryService } from '../../../common/base/service/base-category.service';
import {
  ResponseCreated,
  ResponseFindAll,
  ResponseFindOne,
  ResponseUpdate,
  ResponseDelete,
} from '../../../common/response';

@Injectable()
export class AuthService extends BaseCategoryService<AcademicDegree> {
  constructor(
    @InjectRepository(AcademicDegree)
    protected repository: Repository<AcademicDegree>,
  ) {
    super();
  }

  async create(
    createAcademicDegreeDto: CreateAcademicDegreeDto,
  ): Promise<ResponseCreated<AcademicDegree>> {
    await this.checkExist(['name', 'code'], createAcademicDegreeDto);

    const academicDegree: AcademicDegree = await this.repository.save(createAcademicDegreeDto);

    return new ResponseCreated(academicDegree);
  }

  async findAll(query: QueryAcademicDegreeDto): Promise<ResponseFindAll<AcademicDegree>> {
    const [results, total] = await this.repository.findAndCount({
      skip: query.limit && query.offset,
      take: query.limit,
    });
    return new ResponseFindAll(results, total);
  }

  async findOne(id: number): Promise<ResponseFindOne<AcademicDegree>> {
    const result = await this.repository.findOne({
      where: { id },
    });

    return new ResponseFindOne(result);
  }

  async update(
    id: number,
    updateAcademicDegreeDto: UpdateAcademicDegreeDto,
  ): Promise<ResponseUpdate> {
    await this.checkNotExist(id, AcademicDegree.name);
    await this.checkExist(['name', 'code'], updateAcademicDegreeDto, id);
    const result = await this.repository.save({
      id,
      ...updateAcademicDegreeDto,
    });

    return new ResponseUpdate(result);
  }
}
