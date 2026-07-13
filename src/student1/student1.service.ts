import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student1, Student1Document } from './student1.schema';
import { Model } from 'mongoose';

@Injectable()
export class Student1Service {
    constructor(
        @InjectModel(Student1.name) private student1Model: Model<Student1Document>

    ){}

    async createStudent1 (data: Partial<Student1>):Promise<Student1>{
        const newStudent1 = new this.student1Model(data);
        return newStudent1.save();
    }
}
