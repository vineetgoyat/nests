import { Module } from '@nestjs/common';
import { Employee2Service } from './employee2.service';
import { Employee2Controller } from './employee2.controller';

@Module({
  providers: [Employee2Service],
  controllers: [Employee2Controller]
})
export class Employee2Module {}
