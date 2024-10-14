import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { User } from '../schemas/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    protected userRepository: Repository<User>,
  ) {}

  async register(
    createAcademicDegreeDto: CreateAcademicDegreeDto,
  ): Promise<ResponseCreated<AcademicDegree>> {
    await this.checkExist(['name', 'code'], createAcademicDegreeDto);

    const academicDegree: AcademicDegree = await this.repository.save(createAcademicDegreeDto);

    return new ResponseCreated(academicDegree);
  }
}
