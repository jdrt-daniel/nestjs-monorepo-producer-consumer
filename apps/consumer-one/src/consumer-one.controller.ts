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
  processMessage(@Payload() data, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    const res = this.consumerOneService.receivedMessage(data);
    console.log(res);

    channel.ack(originalMsg);
    console.log('Message deleted from queue');
  }
}
