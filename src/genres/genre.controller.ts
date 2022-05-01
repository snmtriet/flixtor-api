import { GenreService } from './genre.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Genre } from './genre.model';

@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  async getGenres(): Promise<Genre[] | null> {
    return await this.genreService.findAll();
  }

  @Post()
  async create(@Body() genre: Genre): Promise<Genre> {
    return await this.genreService.create(genre);
  }
}
