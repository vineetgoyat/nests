import{ Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
    @Prop()
    'title': string;

    @Prop()
    'author': string;
}