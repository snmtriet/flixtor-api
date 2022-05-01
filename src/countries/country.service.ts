import { Country } from './country.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country)
    private readonly countryModel: ReturnModelType<typeof Country>,
  ) {}

  async create(createCountryDto: { name: string }): Promise<Country> {
    const createdCountry = new this.countryModel(createCountryDto);
    return await createdCountry.save();
  }

  async findAll(): Promise<Country[] | null> {
    return await this.countryModel.find().exec();
  }
}
