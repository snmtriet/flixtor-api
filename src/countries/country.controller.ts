import { Controller, Get, Post, Body } from '@nestjs/common';
import { Country } from './country.model';
import { CountryService } from './country.service';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getCats(): Promise<Country[] | null> {
    return await this.countryService.findAll();
  }

  @Post()
  async create(@Body() country: Country): Promise<Country> {
    return await this.countryService.create(country);
  }
}
