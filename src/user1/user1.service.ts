import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User1 } from './schemas/user1.schema';
import { Model } from 'mongoose';

@Injectable()
export class User1Service {
    constructor(
        @InjectModel(User1.name) private user1Model : Model<User1>){}

        async createUser1() : Promise<User1>{
            const user1 = new this.user1Model({
                name : 'gujju',
                address : {
                    street: 'sade dil ch',
                    city: 'karchi'
                }
                
            })
            return user1.save();
        }
        async findAll(): Promise<User1[]>{
            return this.user1Model.find();
        }
}
