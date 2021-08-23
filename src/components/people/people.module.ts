import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleService } from './domain/use-cases/people.service';
import { PeopleController } from './infrastructure/api/people.controller';
import { PeopleEntity } from './infrastructure/persistence/entity/people.entity';
import { PeopleRepository } from './infrastructure/persistence/people.repository';

@Module({
  controllers: [PeopleController],
  imports: [TypeOrmModule.forFeature([PeopleEntity])],
  providers: [
    {
      provide: 'PeopleServiceInterface',
      useClass: PeopleService
    },
    {
      provide: 'PeopleRepositoryInterface',
      useClass: PeopleRepository
    }
  ]
})
export class PeopleModule { }
