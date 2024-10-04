import {
  Controller,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { TagEnum } from 'src/common/enum/tag.enum';

@Controller("auth")
@ApiTags(TagEnum.AUTH)
export class AuthController {
  constructor(
    // private readonly vehicleCategoryService: VehicleCategoryService
  ) { }

  // @Post()
  // create(@Body() createVehicleCategoryDto: CreateVehicleCategoryDto) {
  //   return this.vehicleCategoryService.create(createVehicleCategoryDto);
  // }

  // @Get()
  // findAll(@Query() query: FindAllVehicleCategoryDto) {
  //   return this.vehicleCategoryService.findAll(query);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.vehicleCategoryService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVehicleCategoryDto: UpdateVehicleCategoryDto) {
  //   return this.vehicleCategoryService.update(+id, updateVehicleCategoryDto);
  // }

  // @Delete(':ids')
  // remove(
  //   @Param('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
  //   ids: number[],
  // ) {
  //   return this.vehicleCategoryService.delete(ids);
  // }
}
