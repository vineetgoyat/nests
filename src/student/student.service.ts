import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students =[
        {id: 1,name:'Gajju', age: 2},
        {id: 2,name:'Chajju', age: 4},
    ];
    getAllStudents(){
        return this.students;
    }
    getStudentsById(id:number){
        const student = this.students.find((s) => s.id === id);
        if(!student){
            throw new NotFoundException('Student not found');
        }
        return student;
    }
    //post method
    createStudent(data:{name:string; age:number}){
        const newStudent ={
            id: Date.now(),
            ...data,
        };
        this.students.push(newStudent);
        return newStudent;
    }


}
