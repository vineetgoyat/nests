import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { createCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor (private readonly customerservice: CustomerService){}
    @Get()
    getCustomers(){
        return this.customerservice.getAllcustomers();
    }
    @Post()
    addCustomer(@Body() createCustomerDto : createCustomerDto){
        return this.customerservice.addCustomer(createCustomerDto);
    }


}
