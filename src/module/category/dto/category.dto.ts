import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { Category } from "../schemas/category.entity";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateCategoryDto extends OmitType(Category, ["id"]) { }

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) { }

export class ListCategoryDto {
    @ApiProperty({
        name: 'offset',
    })
    @IsNotEmpty()
    @IsNumber()
    offset?: number;

    @ApiProperty({
        name: 'limit',
    })
    @IsNotEmpty()
    @IsNumber()
    limit?: number;
}