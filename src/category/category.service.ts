import { Injectable } from '@nestjs/common';

@Injectable() //injectables are mandatory to use in services
export class CategoryService {
    getCategories(){
        return ['Tablet', 'Mobile', 'Laptop'];
    }
}
