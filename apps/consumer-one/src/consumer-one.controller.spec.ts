import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerOneController } from './consumer-one.controller';
import { ConsumerOneService } from './consumer-one.service';

describe('ConsumerOneController', () => {
  let consumerOneController: ConsumerOneController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConsumerOneController],
      providers: [ConsumerOneService],
    }).compile();

    consumerOneController = app.get<ConsumerOneController>(ConsumerOneController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(consumerOneController.getHello()).toBe('Hello World!');
    });
  });
});
