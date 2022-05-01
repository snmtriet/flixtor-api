import { CountryModule } from './countries/country.module';
import { CategoryModule } from './categories/category.module';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { MovieModule } from './movies/movie.module';
import { GenreModule } from './genres/genre.module';

@Module({
  imports: [
    TypegooseModule.forRoot(
      'mongodb+srv://minhtriet:Subindhight1@estate.l3gxu.mongodb.net/flixtor?retryWrites=true&w=majority',
    ),
    MovieModule,
    CategoryModule,
    CountryModule,
    GenreModule,
  ],
})
export class AppModule {}
