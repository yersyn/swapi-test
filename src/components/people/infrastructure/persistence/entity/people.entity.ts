import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { FilmsEntity } from "src/components/films/entity/films.entity";

@Entity("people")
export class PeopleEntity {
    @Column("int", { generated: true, nullable: false, primary: true, name: "id" })
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { name: "nombre", nullable: false, length: 50 })
    nombre: string;

    @Column("varchar", { name: "altura", nullable: false })
    altura: string;

    @Column("varchar", { name: "masa", nullable: false })
    masa: string;

    @ManyToMany(() => FilmsEntity, films => films.people)
    @JoinTable()
    peliculas: FilmsEntity[];

    @Column("varchar", { name: "color_cabello", nullable: true })
    color_cabello: string;

    @Column("varchar", { name: "color_ojo", nullable: true })
    color_ojo: string;

    @Column("varchar", { name: "color_piel", nullable: true })
    color_piel: string;

    @Column("varchar", { name: "sexo", nullable: true })
    sexo: string;

    @Column("varchar", { name: "mundo_natal", nullable: true })
    mundo_natal: string;

    @Column("datetime", { nullable: true })
    created: Date;

    @Column("datetime", { nullable: true })
    edited: Date;

    @Column("varchar", { nullable: true })
    url: string;

}