import { Injectable } from "@nestjs/common";
import { LoggerService } from "src/module/share/logger/logger.service";
import SysHelper from "src/util/sys.util";

@Injectable()
export class EthnicService{
    constructor(
        private readonly logger: LoggerService
    ){}

    public get = (lang: string) : object => {
        const language = SysHelper.getLang(lang)

        const languageObj = Object.fromEntries(Object.entries(language));

        this.logger.trace(`Get lang: ${lang} success`)

        return languageObj;
    }
}