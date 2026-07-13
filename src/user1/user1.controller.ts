import { Controller, Get, Post } from '@nestjs/common';
import { User1Service } from './user1.service';

@Controller('user1')
export class User1Controller {
    constructor (private readonly user1Service: User1Service){}


    @Post()
    create() {
        return this.user1Service.createUser1();
    }

    @Get()
    getAll(){
        return this.user1Service.findAll();
    }
}
