import { Controller, Get, Param } from "@nestjs/common";
import { TransService } from "../service/trans.service";
import { ApiTags } from "@nestjs/swagger";
import { ResponseClient } from "src/common/response/success.response";
import { LoggerService } from "src/module/share/logger/logger.service";
import { TagEnum } from "src/common/enum/tag.enum";
import SysHelper from "src/util/sys.util";

@Controller(SysHelper.getPath(__dirname))
@ApiTags(TagEnum.TRANS)
export class TransController{
    constructor(
        private readonly transService: TransService,

        private readonly logger: LoggerService
    ){}

    @Get(':lang')
    public get(@Param('lang') lang: string){
        this.logger.trace(`Get trans with lang: ${lang}`)

        return ResponseClient.base('', this.transService.get(lang))
    }
}