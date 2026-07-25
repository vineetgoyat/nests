import { Injectable } from '@nestjs/common';
import { Product1 } from './schemas/product1.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class Product1Service {
    constructor(@InjectModel(Product1.name) private product1Model: Model<Product1>
    ) {}
    async createProduct1(): Promise<Product1>
}
