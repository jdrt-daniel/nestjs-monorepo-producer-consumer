import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsumerTwoService {
  getHello(): string {
    return 'Hello World!';
  }
}
