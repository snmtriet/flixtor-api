import { Controller, Get, Post, Body } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';

@Controller('movies')
export class MovieController {
  constructor(private readonly moviesService: MovieService) {}

  @Get()
  async getCats(): Promise<Movie[] | null> {
    return await this.moviesService.findAll();
  }

  @Post()
  async create(@Body() movie: Movie): Promise<Movie> {
    return await this.moviesService.create(movie);
  }
}
