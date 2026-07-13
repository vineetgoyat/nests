import { Test, TestingModule } from '@nestjs/testing';
import { Student1Controller } from './student1.controller';

describe('Student1Controller', () => {
  let controller: Student1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Student1Controller],
    }).compile();

    controller = module.get<Student1Controller>(Student1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
