import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {id:1, name:'kachua', price:10000},
        {id:2, name:'bandar', price:10000},
        {id:3, name:'genda', price:10000}

    ]
}
