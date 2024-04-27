import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RmqRecordBuilder } from '@nestjs/microservices';
import { CreatePersonDTO } from './dto';

@Injectable()
export class AppService {
  constructor(@Inject('RMQ_SERVICE') private client: ClientProxy) {}

  savePerson(data: CreatePersonDTO) {
    const pattern = { cmd: 'save_person' };
    const record = new RmqRecordBuilder(data).build();
    return this.client.send<CreatePersonDTO>(pattern, record).subscribe();
  }
}
