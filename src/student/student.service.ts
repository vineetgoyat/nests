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
    getStudentById(id:number){
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
    //put method
    updateStudent(id:number, data:{name:string; age:number}){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1){
            throw new NotFoundException('Student not found');
        }
        this.students[index] = {id, ...data};
        return this.students[index];
    }
    //patch method-
    patchStudent(id:number, data:Partial<{name:string; age:number}>){
        const student= this.getStudentsById(id);
        Object.assign(student, data);
        return student;
    }

    //delete method
    deleteStudent(id:number){
        const index = this.students.findIndex((s) => s.id === id);
        if(index === -1) {
            throw new NotFoundException('Student Not Find')
        }
        const deleted = this.students.splice(index,1);
        return {message:'student deleted',student : deleted[0]}

        
    }
}