import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsumerOneService {
  getHello(): string {
    return 'Hello World!';
  }
}
