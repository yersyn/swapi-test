import { PeopleDto } from "src/components/people/infraestructure/api/dto/people.dto";

export class FilmsDto {
    
    
        id: number;
        
        creado: Date;
    
        people: PeopleDto[];
    
        director: string;
    
        editado: Date;
    
        rastreo_apertura: string;
    
        productor: string;
    
        fecha_lanzamiento: string;
    
}