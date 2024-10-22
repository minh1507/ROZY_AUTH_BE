import { PickType } from "@nestjs/swagger";
import { File } from "../schemas/file.entity";

export class FileDto extends PickType(File, ['file']) {}