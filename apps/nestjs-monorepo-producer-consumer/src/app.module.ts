import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ClientsModule.register([
      {
        name: 'RMQ_PERSON_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${process.env.RMQ_HOST}:${process.env.RMQ_PORT}`],
          queue: process.env.RMQ_QUEUE_PERSON,
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: 'RMQ_CAT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${process.env.RMQ_HOST}:${process.env.RMQ_PORT}`],
          queue: process.env.RMQ_QUEUE_CAT,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
