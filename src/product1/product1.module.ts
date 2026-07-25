import { Module } from '@nestjs/common';
import { Product1Service } from './product1.service';
import { Product1Controller } from './product1.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product1, Product1Schema } from './schemas/product1.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Product1.name, schema: Product1Schema
  }])],
  providers: [Product1Service],
  controllers: [Product1Controller]
})
export class Product1Module {}
