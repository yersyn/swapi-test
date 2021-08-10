import { Module } from '@nestjs/common';
import { PeopleRepository } from './infraestructure/persistence/people.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleController } from './infraestructure/api/people.controller';
import { PeopleService } from './domain/use-cases/people.service';
import { PeopleEntity } from './infraestructure/persistence/entity/people.entity';

@Module({
  controllers: [PeopleController],
  imports: [TypeOrmModule.forFeature([PeopleEntity])],
  providers: [{
    provide: 'PeopleServiceInterface',
    useClass: PeopleService
  },
  {
    provide: 'PeopleRepositoryInterface',
    useClass: PeopleRepository
  }
]

})
export class PeopleModule {}
