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
        queue: 'cats_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
  console.log(
    `Consumer Two is running on ${process.env.RMQ_HOST}:${process.env.RMQ_PORT}`,
  );
}
bootstrap();
