import{Schema, SchemaFactory, Prop} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Tag} from './tag.schema';


@Schema()
export class Product1 extends Document {
    @Prop()
    'title': string;
    @Prop({type : [Tag]})

    'tags': Tag[];
}
