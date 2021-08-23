import { PeopleEntity } from "src/components/people/infrastructure/persistence/entity/people.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('films')
export class FilmsEntity {

    @Column("int", { generated: true, nullable: false, primary: true, name: "id" })
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column("datetime", { nullable: false })
    creado: Date;

    @ManyToMany(()=>PeopleEntity, people=> people.peliculas )
    people: PeopleEntity[];

    @Column("varchar", { nullable: false })
    director: string;

    @Column("datetime", { nullable: false })
    editado: Date;

    @Column("varchar", { nullable: true })
    rastreo_apertura: string;

    @Column("varchar", { nullable: true })
    productor: string;

    @Column("datetime", { nullable: false })
    fecha_lanzamiento: string;

}