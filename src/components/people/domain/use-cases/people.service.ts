import { Inject } from "@nestjs/common";
import { People } from "../model/people.model";
import { PeopleServiceInterface } from "./ports/input/people.service.interface";
import { PeopleRepositoryInterface } from "./ports/output/people.repository.interface";

export class PeopleService implements PeopleServiceInterface {

    constructor(
        @Inject('PeopleRepositoryInterface') private readonly peopleRepository: PeopleRepositoryInterface,
    ) { }

    async getById(id: number): Promise<People> {
        return await this.peopleRepository.findById(id);
    }

    async get(): Promise<People[]> {
        return await this.peopleRepository.findAll();
    }

    async create(people: People): Promise<People> {
        try {
            console.log(people);
            return await this.peopleRepository.create(people);
        } catch (error) {
            console.log(error);
        }
    }

}