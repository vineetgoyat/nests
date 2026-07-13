import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student1, Student1Schema } from './student1.schema';

@Module({
    imports :[
        MongooseModule.forFeature([{name : Student1.name, schema : Student1Schema}])
    ]})


export class Student1Module {}
