import { Module } from '@nestjs/common';
import { ConsumerOneController } from './consumer-one.controller';
import { ConsumerOneService } from './consumer-one.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [ConsumerOneController],
  providers: [ConsumerOneService],
})
export class ConsumerOneModule {}
