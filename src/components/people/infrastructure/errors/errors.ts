export class PeopleNotFoundError extends Error {
    constructor(id:number) {
        super(`People id ${id} not found`);
        this.name = "PeopleNotFoundError";
    }
    
}

export class PeopleAlreadyExistsError extends Error{
    constructor(name: string){
        super(`People name:${name} already exists`);
        this.name = 'RoleAlreadyExistsError';
    };
}