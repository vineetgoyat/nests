import { Body, Controller, Post } from '@nestjs/common';
import { Student1Service } from './student1.service';
import { Student1 } from './student1.schema';

@Controller('student1')
export class Student1Controller {
    constructor(private readonly student1Service: Student1Service){}

    @Post()
    async addStudent1(@Body() data: Partial<Student1>){
        return this.student1Service.createStudent1(data);
    }
}
