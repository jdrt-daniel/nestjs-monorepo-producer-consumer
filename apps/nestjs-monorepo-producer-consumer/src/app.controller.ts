import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePersonDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Person')
@Controller('person')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  savePerson(@Body() data: CreatePersonDTO) {
    return this.appService.savePerson(data);
  }
}
