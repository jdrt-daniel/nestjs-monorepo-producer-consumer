import { Injectable } from '@nestjs/common';
import { CreateCatDTO } from 'apps/nestjs-monorepo-producer-consumer/src/dto';

@Injectable()
export class ConsumerTwoService {
  receivedMessage(data: CreateCatDTO): string {
    return (
      'Message received from producer: ' +
      JSON.stringify(data) +
      ' in Consumer Two'
    );
  }
}
