import { Controller } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor (private readonly StudentService: StudentService){}
    

}
