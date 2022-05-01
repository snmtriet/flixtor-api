import { CategoryService } from './category.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Category } from './category.model';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCats(): Promise<Category[] | null> {
    return await this.categoryService.findAll();
  }

  @Post()
  async create(@Body() category: Category): Promise<Category> {
    return await this.categoryService.create(category);
  }
}
