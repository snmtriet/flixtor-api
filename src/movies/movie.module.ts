import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Movie } from './movie.model';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [TypegooseModule.forFeature([Movie])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
