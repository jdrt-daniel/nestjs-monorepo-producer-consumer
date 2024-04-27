import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCatDTO {
  @ApiProperty({ example: 'Kitty' })
  @IsString()
  name: string;

  @ApiProperty({ example: 3 })
  @IsNumber()
  age: number;
}
