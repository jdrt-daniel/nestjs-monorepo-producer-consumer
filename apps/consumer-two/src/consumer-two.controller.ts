import { Controller, Get } from '@nestjs/common';
import { ConsumerTwoService } from './consumer-two.service';

@Controller()
export class ConsumerTwoController {
  constructor(private readonly consumerTwoService: ConsumerTwoService) {}

  @Get()
  getHello(): string {
    return this.consumerTwoService.getHello();
  }
}
