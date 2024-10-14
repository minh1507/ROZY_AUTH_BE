import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagEnum } from 'src/common/enum/tag.enum';
import { AuthDto } from '../dto/auth.dto';
import { AuthService } from '../service/auth.service';

@Controller("auth")
@ApiTags(TagEnum.AUTH)
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Post()
  register(@Body() request: AuthDto) {
    return this.authService.register(request);
  }

  @Post()
  login(@Body() request: AuthDto) {
    return this.authService.login(request);
  }
}
