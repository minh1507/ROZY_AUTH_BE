import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ResponseClient } from "src/common/response/success.response";
import { LoggerService } from "src/module/share/logger/logger.service";
import { TagEnum } from "src/common/enum/tag.enum";
import SysHelper from "src/util/sys.util";
import { EthnicService } from "../service/ethnic.service";

@Controller(SysHelper.getPath(__dirname))
@ApiTags(TagEnum.ETHNIC)
export class EthnicController{
    constructor(
        private readonly ethnicService: EthnicService,

        private readonly logger: LoggerService
    ){}

    @Get(':lang')
    public get(@Param('lang') lang: string){
        this.logger.trace(`Get trans with lang: ${lang}`)

        return ResponseClient.base('', this.ethnicService.get(lang))
    }
}