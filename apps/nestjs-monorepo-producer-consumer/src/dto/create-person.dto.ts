import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePersonDTO {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 30 })
  @IsNumber()
  age: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;
}
