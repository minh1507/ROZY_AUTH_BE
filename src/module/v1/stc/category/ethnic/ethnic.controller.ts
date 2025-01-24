import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseClient } from 'src/common/response/success.response';
import { LoggerService } from 'src/module/share/logger/logger.service';
import { TagEnum } from 'src/common/enum/tag.enum';
import SysHelper from 'src/util/sys.util';
import { EthnicService } from './ethnic.service';

@Controller(SysHelper.getPath(__dirname))
@ApiTags(TagEnum.ETHNIC)
export class EthnicController {
  constructor(
    private readonly ethnicService: EthnicService,

    private readonly logger: LoggerService,
  ) {}

  @Get()
  public async find() {
    this.logger.trace(`[CONTROLLER] Start find all ethnic`);

    const result = await this.ethnicService.find();

    return ResponseClient.base('GET', result);
  }
}
