import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagEnum } from 'src/common/enum/tag.enum';
import { SuccessResponse } from 'src/common/response/success.response';
import { AnonymousService } from '../service/anonymous.service';
import { CreateAnonymousDto, UpdateAnonymousDto } from '../dto/anonymous.dto';

@Controller('anonymous')
@ApiTags(TagEnum.ANONYMOUS)
export class AnonymousController {
    constructor(private readonly anonymousService: AnonymousService) { }

    @Get()
    async list() {
        const data = await this.anonymousService.list(request);
        return SuccessResponse.response(data)
    }

    @Get(':id')
    async detail(@Param('id') id: string) {
        const data = await this.anonymousService.detail(+id);
        return SuccessResponse.response(data)
    }

    @Post()
    create(@Body() request: CreateAnonymousDto) {
        this.anonymousService.create(request);
        return SuccessResponse.base()
    }

    @Patch(':id')
    update(@Body() request: UpdateAnonymousDto, @Param('id') id: string) {
        this.anonymousService.update(request, +id);
        return SuccessResponse.base()
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this.anonymousService.delete(+id);
        return SuccessResponse.base()
    }
}
