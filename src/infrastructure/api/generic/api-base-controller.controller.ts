import { HttpStatus } from "@nestjs/common";
import { AppConfigs } from "src/core/constants/app.configs";
import { ApiGenericResponse } from "./api-generic-response.generic";

export class ApiBaseController{
	
	protected buildApiResponse<T>(code: HttpStatus, message:String, data?:T): ApiGenericResponse<T>{
		let response: ApiGenericResponse<T> = new ApiGenericResponse<T>();
		response.setVersion(AppConfigs.APPLICATION_VERSION);
		response.setStatus(code);
		response.setTimestamp(new Date());
		response.setMessage(message);
        if(data){
            response.setData(data);
        }

		console.log(response);
		
		return response;
	}

}