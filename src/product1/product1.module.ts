import { Module } from '@nestjs/common';
import { Product1Service } from './product1.service';

@Module({
  providers: [Product1Service]
})
export class Product1Module {}
