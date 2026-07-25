import { Module } from '@nestjs/common';
import { Product1Service } from './product1.service';
import { Product1Controller } from './product1.controller';

@Module({
  providers: [Product1Service],
  controllers: [Product1Controller]
})
export class Product1Module {}
