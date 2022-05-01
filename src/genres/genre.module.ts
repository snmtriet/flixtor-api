import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Genre } from './genre.model';

@Module({
  imports: [TypegooseModule.forFeature([Genre])],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
