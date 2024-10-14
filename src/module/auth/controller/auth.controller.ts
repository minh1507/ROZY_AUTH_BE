import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { TagEnum } from 'src/common/enum/tag.enum';

@Controller("auth")
@ApiTags(TagEnum.AUTH)
export class AuthController {
  constructor(
    // private readonly vehicleCategoryService: VehicleCategoryService
  ) { }

  @Post()
  create(@Body() createVehicleCategoryDto: CreateVehicleCategoryDto) {
    return this.vehicleCategoryService.create(createVehicleCategoryDto);
  }
}
