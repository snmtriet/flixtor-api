import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie)
    private readonly movieModel: ReturnModelType<typeof Movie>,
  ) {}

  async create(createMovieDto: { name: string }): Promise<Movie> {
    const createdMovie = new this.movieModel(createMovieDto);
    return await createdMovie.save();
  }

  async findAll(): Promise<Movie[] | null> {
    return await this.movieModel
      .find()
      .select('-__v')
      .populate({
        path: 'category',
        select: '-__v -createdAt',
      })
      .exec();
  }
}
