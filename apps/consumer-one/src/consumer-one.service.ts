import { Injectable } from '@nestjs/common';
import { CreatePersonDTO } from 'apps/nestjs-monorepo-producer-consumer/src/dto';

@Injectable()
export class ConsumerOneService {
  receivedMessage(data: CreatePersonDTO): string {
    return (
      'Message received from producer: ' +
      JSON.stringify(data) +
      ' in Consumer One'
    );
  }
}
