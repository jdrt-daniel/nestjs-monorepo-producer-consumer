import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RmqRecordBuilder } from '@nestjs/microservices';
import { CreateCatDTO, CreatePersonDTO } from './dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('RMQ_PERSON_SERVICE')
    private readonly clientPerson: ClientProxy,
    @Inject('RMQ_CAT_SERVICE')
    private readonly clientCat: ClientProxy,
  ) {}

  savePerson(data: CreatePersonDTO) {
    const pattern = { cmd: 'save_person' };
    const record = new RmqRecordBuilder(data).build();
    this.clientPerson.send(pattern, record).subscribe();
  }

  saveCat(data: CreateCatDTO) {
    const pattern = { cmd: 'save_cat' };
    const record = new RmqRecordBuilder(data).build();
    this.clientCat.send(pattern, record).subscribe();
  }
}
