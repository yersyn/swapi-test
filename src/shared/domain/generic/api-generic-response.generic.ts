import { HttpStatus } from "@nestjs/common";

export class  ApiGenericResponse<T> {
    private version: String;
	
	// private profile: String;
	
	private status: HttpStatus;
	
	private timestamp: Date;
	
	private message: String;
	
	private data: T;


    constructor(){

    }

    public getVersion(){
        return this.version;
    }

    public setVersion(version:String){
        this.version = version;
    }

    // public getProfile(profile:String){
    //     this.profile = profile;
    // }

    // public setProfile(profile:String){
    //     this.profile = profile;
    // }

    public getStatus(status:HttpStatus){
        return this.status;
    }

    public setStatus(status:HttpStatus){
        this.status = status;
    }
    
    public getTimestamp(timestamp:Date){
        return this.timestamp;
    }

    public setTimestamp(timestamp:Date){
        this.timestamp = timestamp;
    }

    public getMessage(message:String){
        return this.message;
    }

    public setMessage(message:String){
        this.message = message;
    }

    public getData(data:T){
        return this.data;
    }

    public setData(data:T){
        this.data = data;
    }

}