import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Student1Service } from './student1.service';
import { Student1 } from './student1.schema';

@Controller('student1')
export class Student1Controller {
    constructor(private readonly student1Service: Student1Service){}

    @Post()
    async addStudent1(@Body() data: Partial<Student1>){
        return this.student1Service.createStudent1(data);
    }

    @Get()
    async getStudents1(){
        return this.student1Service.getAllStudents1();
    }

    @Get(':id')
    async getStudent1(@Param('id') id : string){
        return this.student1Service.getStudent1ById(id);
    }

    @Put(':id')
    async updateStudent1(
        @Param('id') id : string,
        @Body() data: Partial<Student1>
    ){
        return this.student1Service.updateStudent1(id, data);
    }
}
