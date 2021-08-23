import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PeopleEntity } from "./entity/people.entity";
import { PeopleRepositoryInterface } from "../../domain/use-cases/ports/output/people.repository.interface";
import { BaseCommonRepository } from "src/infrastructure/repositories/base/base.common.repository";

export class PeopleRepository extends BaseCommonRepository<PeopleEntity> implements PeopleRepositoryInterface{

    constructor(@InjectRepository(PeopleEntity) private readonly peopleRepository: Repository<PeopleEntity>){
        super(peopleRepository);
    }

}