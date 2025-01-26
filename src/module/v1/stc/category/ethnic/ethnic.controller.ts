import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseClient } from 'src/common/response/success.response';
import { LoggerService } from 'src/module/share/logger/logger.service';
import { TagEnum } from 'src/common/enum/tag.enum';
import SysHelper from 'src/util/sys.util';
import { EthnicService } from './ethnic.service';
import { CreateEthnicDto, FindDto } from './ethnic.dto';

@Controller(SysHelper.getPath(__dirname))
@ApiTags(TagEnum.ETHNIC)
export class EthnicController {
  constructor(
    private readonly ethnicService: EthnicService,
    private readonly logger: LoggerService,
  ) {}

  @Get()
  public async find(@Query() param: FindDto) {
    this.logger.trace(
      `[CONTROLLER] Start find all ethnics with param: ${JSON.stringify(param)}`,
    );

    const result = await this.ethnicService.find(param);

    return ResponseClient.base('GET', result);
  }

  @Post()
  public async create(@Body() param: CreateEthnicDto) {
    this.logger.trace(
      `[CONTROLLER] Start creat ethnic with param: ${JSON.stringify(param)}`,
    );

    await this.ethnicService.create(param);

    return ResponseClient.base('POST');
  }
}
