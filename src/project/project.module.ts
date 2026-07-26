import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { Project, ProjectSchema } from './schemas/project.schema';
import { Developer, DeveloperSchema } from './schemas/developer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Developer.name, schema: DeveloperSchema},
      {name: Project.name, schema: ProjectSchema},
    ])

  ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
