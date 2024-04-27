import { Controller } from '@nestjs/common';
import { ConsumerTwoService } from './consumer-two.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class ConsumerTwoController {
  constructor(private readonly consumerTwoService: ConsumerTwoService) {}

  @MessagePattern({ cmd: 'save_cat' })
  getHello(@Payload() data, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    console.log(data);

    channel.ack(originalMsg);
    console.log('mensaje recibido');
  }
}
