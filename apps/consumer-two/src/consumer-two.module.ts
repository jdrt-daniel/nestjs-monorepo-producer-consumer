import { Module } from '@nestjs/common';
import { ConsumerTwoController } from './consumer-two.controller';
import { ConsumerTwoService } from './consumer-two.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [ConsumerTwoController],
  providers: [ConsumerTwoService],
})
export class ConsumerTwoModule {}
