import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { PaginationDto } from 'src/module/v1/base/dto.base';

export class CreateEthnicDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  code: string;
}

export class FindDto extends PaginationDto {}
