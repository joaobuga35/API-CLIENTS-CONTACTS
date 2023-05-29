import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    description: 'Nome do contato',
    type: String,
    default: 'João Lucas',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty({
    description: 'Email do contato',
    type: String,
    default: 'joao@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Número do contato',
    type: String,
    default: '(DDD) 00000-0000',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(15)
  number: string;

  @IsString()
  @IsOptional()
  image: string | null;
}
