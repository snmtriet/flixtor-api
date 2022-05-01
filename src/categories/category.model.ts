import { prop, Ref } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

export class Category {
  @prop({ required: true })
  name: string;
  @prop({ type: Date, default: Date.now, required: true })
  createdAt: Date;
}
