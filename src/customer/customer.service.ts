import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { createCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[]=[];

    getAllcustomers() : Customer[]{
        return this.customers;

    }
    addCustomer( createCustomerDto : createCustomerDto) : Customer{
        const newCustomer : Customer = {
            id:Date. now(),
            ...createCustomerDto,
        };
        this.customers.push(newCustomer);
        return newCustomer;
    
    }
}
