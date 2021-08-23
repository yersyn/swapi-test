import { IsNumber, IsOptional, IsString} from "class-validator";
import { FilmsDto } from "src/components/films/infraestructure/films.dto";
import { People } from "src/components/people/domain/model/people.model";

export class PeopleDto {
    
    @IsNumber()
    id: number;

    @IsString()
    nombre: string;

    @IsString()
    altura: string;

    @IsString()
    masa: string;

    @IsOptional()
    peliculas: FilmsDto[];

    @IsOptional()
    @IsString()
    color_cabello: string;

    @IsOptional()
    @IsString()
    color_ojo: string;

    @IsOptional()
    @IsString()
    color_piel: string;

    @IsString()
    sexo: string;

    @IsOptional()
    @IsString()
    mundo_natal: string;

    @IsOptional()
    @IsString()
    created: Date;

    @IsOptional()
    @IsString()
    edited: Date;

    @IsOptional()
    @IsString()
    url: string;


    fromPeople(people: People){
        this.id = people.id;
        this.nombre = people.nombre;
        this.altura = people.altura;
        this.masa = people.masa;
        // this.peliculas = people.peliculas;
        this.color_cabello = people.color_cabello;
        this.color_ojo = people.color_ojo;
        this.sexo = people.sexo;
        this.mundo_natal = people.mundo_natal;
        this.created = people.created;
        this.edited = people.edited;
        this.url = people.url;

        return this;        
    }

    toPeople(): People{
        let people:People = new People();
        people.peliculas = [];
        return {people, ...this};
    }

}

