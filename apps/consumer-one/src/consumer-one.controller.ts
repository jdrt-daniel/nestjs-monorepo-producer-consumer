import { Controller } from '@nestjs/common';
import { ConsumerOneService } from './consumer-one.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ConsumerOneController {
  constructor(private readonly consumerOneService: ConsumerOneService) {}

  @EventPattern('save_person')
  getHello(): string {
    return this.consumerOneService.getHello();
  }
}
