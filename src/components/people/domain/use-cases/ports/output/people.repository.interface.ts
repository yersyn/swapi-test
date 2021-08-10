import { BaseCommonRepository } from "src/infraestructure/repositories/base/base.common.repository";
import { PeopleEntity } from "../../../../infraestructure/persistence/entity/people.entity";

export interface PeopleRepositoryInterface extends BaseCommonRepository<PeopleEntity>{
    
}