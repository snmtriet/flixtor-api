import { prop } from '@typegoose/typegoose';

export class Country {
  @prop({ required: true })
  name: string;
  @prop({ type: Date, default: Date.now, required: true })
  createdAt: Date;
}
