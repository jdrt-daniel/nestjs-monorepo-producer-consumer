import { Controller } from '@nestjs/common';
import { ConsumerOneService } from './consumer-one.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class ConsumerOneController {
  constructor(private readonly consumerOneService: ConsumerOneService) {}

  @MessagePattern({ cmd: 'save_person' })
  getHello(@Payload() data, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    console.log(data);

    channel.ack(originalMsg);
    console.log('mensaje recibido');
  }
}
