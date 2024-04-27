import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDTO, CreatePersonDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Producer')
@Controller('producer')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('save-person')
  savePerson(@Body() data: CreatePersonDTO) {
    return this.appService.savePerson(data);
  }

  @Post('save-cat')
  saveCat(@Body() data: CreateCatDTO) {
    return this.appService.saveCat(data);
  }
}
