import { NestFactory } from '@nestjs/core';
import { ConsumerTwoModule } from './consumer-two.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ConsumerTwoModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${process.env.RMQ_HOST}:${process.env.RMQ_PORT}`],
        queue: process.env.RMQ_QUEUE_CAT,
        queueOptions: {
          durable: false,
        },
        noAck: false,
      },
    },
  );
  await app.listen();
  console.log(
    `Consumer Two is running on amqp://${process.env.RMQ_HOST}:${process.env.RMQ_PORT}`,
  );
}
bootstrap();
