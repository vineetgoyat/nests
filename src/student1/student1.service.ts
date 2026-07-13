import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student1, Student1Document } from './student1.schema';
import { Model } from 'mongoose';
import { truncate } from 'fs';

@Injectable()
export class Student1Service {
    constructor(
        @InjectModel(Student1.name) private student1Model: Model<Student1Document>

    ){}

    async createStudent1 (data: Partial<Student1>):Promise<Student1>{
        const newStudent1 = new this.student1Model(data);
        return newStudent1.save();
    }

    async getAllStudents1() : Promise<Student1[]>{
        return this.student1Model.find().exec();
    }

    async getStudent1ById(id : string): Promise<Student1 | null>{
        return this.student1Model.findById(id).exec();
    }

    async updateStudent1 (id : string, data: Partial<Student1>):Promise<Student1 | null>{
        return this.student1Model.findByIdAndUpdate(id, data, {new: true}).exec();
        
    }

    async patchStudent1(id: string, data: Partial<Student1>): Promise<Student1 | null>{
        return this.student1Model.findByIdAndUpdate(id, data, {new:true}).exec();
    }
}
