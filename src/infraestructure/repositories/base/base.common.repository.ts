import { DeleteResult, Repository } from "typeorm";
import { BaseInterfaceRepository } from "./base.interface.repository";

export abstract class BaseCommonRepository<T> implements BaseInterfaceRepository<T>{
    
    private entity: Repository<T>;
    
    protected constructor(entity: Repository<T>) {
        this.entity = entity;
    }

    async findById(id: number): Promise<T> {
       return await this.entity.findOne(id);
    }
    
    async findAll():Promise<T[]>{
        return await this.entity.find();
    }

    async create(data: any): Promise<T> {
        return await this.entity.save(data);
    }
    async update(data: any, id: number): Promise<T> {
        data.id = id;
        return this.entity.save(data)
    }
    delete(id: number): Promise<DeleteResult> {
        return this.entity.delete(id);
    }


} 