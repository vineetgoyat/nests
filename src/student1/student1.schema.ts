import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Student1Document = Student1 & Document;

@Schema({timestamps : true})
export class Student1 {

    @Prop({required : true})
    'name': string;

    @Prop({required : true})
    'age': number;

    @Prop()
    email?: string;
}

export const Student1Schema = SchemaFactory.createForClass(Student1);