import { Body, Controller, Get, HttpStatus, Inject, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { identity } from 'rxjs';
import { appMessages } from 'src/shared/constants/app-messages.constant';
import { AppUrls } from 'src/shared/constants/app-urls.constant';
import { ApiBaseController } from 'src/shared/controller/api-base-controller.controller';
import { ApiGenericResponse } from 'src/shared/domain/generic/api-generic-response.generic';
import { PeopleServiceInterface } from '../../domain/use-cases/ports/input/people.service.interface';
import { PeopleDto } from './dto/people.dto';

@Controller(AppUrls.API_PEOPLE)
export class PeopleController extends ApiBaseController {

    constructor(@Inject('PeopleServiceInterface') private readonly peopleService: PeopleServiceInterface) {
        super();
    }

    
    @Get(AppUrls.API_PEOPLE_LIST)
    public async get(@Res() res): Promise<ApiGenericResponse<PeopleDto[]>> {
        console.log("HOla mundooooo");

        const result = await this.peopleService.get();
        const apiResult = this.buildApiResponse(
            HttpStatus.OK,
            appMessages.GENERIC_GET_UNIQUE_SUCCESS,
            identity(result)
        );
        return res.json(apiResult);
    }

    @Get(AppUrls.API_PEOPLE_SINGLE)
    public async getById(@Res() res, @Param('id', ParseIntPipe) peopleId: number): Promise<ApiGenericResponse<PeopleDto>> {
        console.log("HOla mundooooo");

        const result = await this.peopleService.getById(peopleId);
        const apiResult = this.buildApiResponse(
            HttpStatus.OK,
            appMessages.GENERIC_GET_UNIQUE_SUCCESS,
            identity(result)
        );
        return res.json(apiResult);
    }


    @Post(AppUrls.API_PEOPLE_SAVE)
    public async save(@Res() res, @Body() peopleDto: PeopleDto) {
        console.log("Hola mundooooo");

        const result = await this.peopleService.create(peopleDto);
        const apiResult = this.buildApiResponse(
            HttpStatus.OK,
            appMessages.GENERIC_CREATE_SUCCESS,
            identity(result)
        );

        return res.json(apiResult);
        
    }

}
