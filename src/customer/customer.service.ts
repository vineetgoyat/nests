import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';

@Injectable()
export class CustomerService {
    private customers: Customer[]=[];

    getAllcustomers() : Customer[]{
        return this.customers;

    }
}
