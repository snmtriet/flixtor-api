import { Genre } from './genre.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class GenreService {
  constructor(
    @InjectModel(Genre)
    private readonly genreModel: ReturnModelType<typeof Genre>,
  ) {}

  async create(createGenreDto: { name: string }): Promise<Genre> {
    const createdGenre = new this.genreModel(createGenreDto);
    return await createdGenre.save();
  }

  async findAll(): Promise<Genre[] | null> {
    return await this.genreModel.find().exec();
  }
}
