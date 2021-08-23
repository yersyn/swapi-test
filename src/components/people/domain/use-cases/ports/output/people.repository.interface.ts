import { PeopleEntity } from "src/components/people/infrastructure/persistence/entity/people.entity";
import { BaseCommonRepository } from "src/infrastructure/repositories/base/base.common.repository";

export interface PeopleRepositoryInterface extends BaseCommonRepository<PeopleEntity>{
    
}