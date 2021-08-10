import { People } from "src/components/people/domain/model/people.model";

export class Films {

    id: number;
    
    creado: Date;

    people: People[];

    director: string;

    editado: Date;

    rastreo_apertura: string;

    productor: string;

    fecha_lanzamiento: string;

}