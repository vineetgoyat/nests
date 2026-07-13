import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student1, Student1Schema } from './student1.schema';
import { Student1Service } from './student1.service';

@Module({
    imports :[
        MongooseModule.forFeature([{name : Student1.name, schema : Student1Schema}])
    ],
    providers: [Student1Service]})


export class Student1Module {}
