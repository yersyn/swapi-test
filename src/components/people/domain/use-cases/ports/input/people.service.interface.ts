import { People } from "../../../model/people.model";


export interface PeopleServiceInterface{

    create (people:People): Promise<People>;    

    getById(id: number): Promise<People>;

    get(): Promise<People[]>
}