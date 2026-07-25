import { Injectable } from '@nestjs/common';
import { Employee2 } from './schemas/employee2.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class Employee2Service {
    constructor(
        @InjectModel(Employee2.name) private employee2Model: Model<Employee2>,
        @InjectModel(Profile.name) private profileModel: Model<Profile>,
    ){}

    async createEmployee2(): Promise<Employee2>{
        const profile= await new this.profileModel({
            age:20,
            qualification:'masters'
        }).save();

        const employee2= await new this.employee2Model({
            name:'vineet',
            profile:profile._id
        });

        return employee2.save();
    }
    async findAll(): Promise<Employee2[]>{
        return this.employee2Model.find().populate('Profile').exec();;
}
}
