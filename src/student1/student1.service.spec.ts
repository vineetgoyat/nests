import { Test, TestingModule } from '@nestjs/testing';
import { Student1Service } from './student1.service';

describe('Student1Service', () => {
  let service: Student1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Student1Service],
    }).compile();

    service = module.get<Student1Service>(Student1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
