import { CountryModule } from './countries/country.module';
import { CategoryModule } from './categories/category.module';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { MovieModule } from './movies/movie.module';
import { GenreModule } from './genres/genre.module';
import 'dotenv/config';

@Module({
  imports: [
    TypegooseModule.forRoot(
      process.env.DB ||
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@estate.l3gxu.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`,
    ),
    MovieModule,
    CategoryModule,
    CountryModule,
    GenreModule,
  ],
})
export class AppModule {}
