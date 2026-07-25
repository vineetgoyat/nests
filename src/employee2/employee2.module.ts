import { Module } from '@nestjs/common';
import { Employee2Service } from './employee2.service';
import { Employee2Controller } from './employee2.controller';
import { Profile, ProfileSchema } from './schemas/profile.schema';
import { Employee2, Employee2Schema } from './schemas/employee2.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Employee2.name, schema: Employee2Schema},
      {name: Profile.name, schema: ProfileSchema}
    ])
  ],
  providers: [Employee2Service],
  controllers: [Employee2Controller]
})
export class Employee2Module {}
