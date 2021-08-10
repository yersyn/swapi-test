import { InjectRepository } from "@nestjs/typeorm";
import { BaseCommonRepository } from "src/infraestructure/repositories/base/base.common.repository";
import { Repository } from "typeorm";
import { PeopleEntity } from "./entity/people.entity";
import { PeopleRepositoryInterface } from "../../domain/use-cases/ports/output/people.repository.interface";

export class PeopleRepository extends BaseCommonRepository<PeopleEntity> implements PeopleRepositoryInterface{

    constructor(@InjectRepository(PeopleEntity) private readonly peopleRepository: Repository<PeopleEntity>){
        super(peopleRepository);
    }

}