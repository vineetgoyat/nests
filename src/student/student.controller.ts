import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor (private readonly studentService: StudentService){};

    @Get()
    getAll(){
    return this.studentService.getAllStudents();
    }
    @Get(':id')
    getOne(@Param('id') id: string){
        return this.studentService.getStudentById(Number(id));

    }
    @Post()
    create(@Body() body: {name:string; age:number}){
        return this.studentService.createStudent(body);
    }


}
