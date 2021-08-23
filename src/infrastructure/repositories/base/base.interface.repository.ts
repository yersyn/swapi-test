import { DeleteResult } from "typeorm";

export interface BaseInterfaceRepository<T> {

    findById(id:number): Promise<T>;    
    create(data: T | any): Promise<T>;
    update(data: T | any, id:number): Promise<T>;
    delete(id: number): Promise<DeleteResult>;

}