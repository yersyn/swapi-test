import { IsNumber, IsOptional, IsString } from "class-validator";

export class PeopleBasic{
    
    @IsNumber()
    id: number;

    @IsString()
    nombre: string;

    @IsString()
    altura: string;

    @IsString()
    masa: string;

    @IsOptional()
    @IsString()
    color_cabello: string;

    @IsOptional()
    @IsString()
    color_ojo: string;

}