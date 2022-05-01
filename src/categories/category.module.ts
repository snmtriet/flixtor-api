import { CategoryService } from './category.service';
import { Category } from './category.model';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CategoryController } from './category.controller';

@Module({
  imports: [TypegooseModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
