import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
// Use Jest globals (describe, it, expect, beforeEach) provided by the test environment

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
