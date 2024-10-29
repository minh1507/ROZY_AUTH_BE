import { OmitType, PartialType } from "@nestjs/swagger";
import { Anonymous } from "../schemas/anonymous.entity";

export class CreateAnonymousDto extends OmitType(Anonymous, ["id"]) { }

export class UpdateAnonymousDto extends PartialType(CreateAnonymousDto) { }