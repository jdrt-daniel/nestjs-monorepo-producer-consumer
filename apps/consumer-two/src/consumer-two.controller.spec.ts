import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerTwoController } from './consumer-two.controller';
import { ConsumerTwoService } from './consumer-two.service';

describe('ConsumerTwoController', () => {
  let consumerTwoController: ConsumerTwoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConsumerTwoController],
      providers: [ConsumerTwoService],
    }).compile();

    consumerTwoController = app.get<ConsumerTwoController>(ConsumerTwoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(consumerTwoController.getHello()).toBe('Hello World!');
    });
  });
});
