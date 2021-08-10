import { Films } from "src/components/films/domain/model/Films";

export class People {
    id: number;

    nombre: string;

    altura: string;

    masa: string;

    peliculas: Films[];

    color_cabello: string;

    color_ojo: string;

    color_piel: string;

    sexo: string;

    mundo_natal: string;

    created: Date;

    edited: Date;

    url: string;

}