import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student1Schema } from './student1.schema';

@Module({
    imports :[
        MongooseModule.forFeature([{name : Student1Schema, schema : Student1Schema}])
    ]})


export class Student1Module {}
