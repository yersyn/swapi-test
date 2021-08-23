import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './components/people/people.module';
import { FilmsModule } from './components/films/films.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { FilmsEntity } from './components/films/entity/films.entity';
import { PeopleEntity } from './components/people/infrastructure/persistence/entity/people.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:  "mysql",
      host:  "localhost",
      port:  3306,
      username:  "admin",
      password:  "swapi123",
      database:  "swapiDB",
      entities:  [PeopleEntity, FilmsEntity],
      synchronize:  true
    }),
    HttpModule, FilmsModule, PeopleModule],
  controllers: [AppController],
  providers: [
    AppService],
})
export class AppModule { }
