import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { User } from '../../user/schemas/user.entity';
import { AuthDto } from '../dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    protected userRepository: Repository<User>,
  ) {}

  async register(
    request: AuthDto,
  ) {
    return 1
  }

  async login(
    request: AuthDto,
  ) {
    return 1
  }
}
