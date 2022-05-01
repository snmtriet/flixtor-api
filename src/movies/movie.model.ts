import { Category } from './../categories/category.model';
import { prop, Ref } from '@typegoose/typegoose';

export class Movie {
  @prop({ required: true })
  name: string;
  @prop({ type: Number, required: true })
  time: number;
  @prop({ required: true })
  image: string;
  @prop({ required: true })
  quality: string;
  @prop({ type: Date, default: Date.now, required: true })
  createdAt: Date;
  @prop({ autopopulate: true, ref: Category })
  category: Ref<Category>;
}
