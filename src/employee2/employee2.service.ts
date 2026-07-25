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

    async createEmployee2
}
