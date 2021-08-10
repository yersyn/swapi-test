import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './components/people/people.module';
import { FilmsModule } from './components/films/films.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true
    }),
    HttpModule, PeopleModule, FilmsModule],
  controllers: [AppController],
  providers: [
    AppService],
})
export class AppModule { }
