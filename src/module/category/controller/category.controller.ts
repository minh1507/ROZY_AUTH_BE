import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagEnum } from 'src/common/enum/tag.enum';
import { CategoryService } from '../service/category.service';
import { CreateCategoryDto, ListCategoryDto, UpdateCategoryDto } from '../dto/category.dto';
import { SuccessResponse } from 'src/common/response/success.response';

@Controller("category")
@ApiTags(TagEnum.CATEGORY)
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService
  ) { }

  @Get()
  async list(@Query() request: ListCategoryDto) {
    const data = await this.categoryService.list(request);
    return SuccessResponse.response(data)
  }

  @Get(':id')
  async detail(@Param('id') id: string) {
    const data = await this.categoryService.detail(+id);
    return SuccessResponse.response(data)
  }

  @Post()
  create(@Body() request: CreateCategoryDto) {
    this.categoryService.create(request);
    return SuccessResponse.base()
  }

  @Patch(':id')
  update(@Body() request: UpdateCategoryDto, @Param('id') id: string) {
    this.categoryService.update(request, +id);
    return SuccessResponse.base()
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.categoryService.delete(+id);
    return SuccessResponse.base()
  }
}
