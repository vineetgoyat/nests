import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';
import { Developer } from './schemas/developer.schema';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Developer.name) private developerModel: Model<Developer>,
        @InjectModel(Project.name) private projectModel: Model<Project>
    ) {}

    async seed(): Promise<dev1: Developer; dev2: Developer> {
        const [project1, project2] = await Promise.all([
            this.projectModel.create({ title: 'Nest CRM'}),
            this.projectModel.create({ title: 'MONGO Analytics'})
        ]);

        const [dev1, dev2] = await Promise.all([
            this.dveloperModel.create({
                name: 'Vineet',
                projects: [projectA._id, projectB._id],
                
            })
    }
    
