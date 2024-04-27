import { NestFactory } from '@nestjs/core';
import { ConsumerOneModule } from './consumer-one.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ConsumerOneModule,
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
    `Consumer One is running on amqp://${process.env.RMQ_HOST}:${process.env.RMQ_PORT}`,
  );
}
bootstrap();
