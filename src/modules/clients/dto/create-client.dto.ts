import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
} from 'class-validator';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    default: 'João Lucas',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value), {
    groups: ['transform'],
  })
  password: string;

  @ApiProperty({
    description: 'Email do usuário',
    type: String,
    default: 'joao@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Número do usuário',
    type: String,
    default: '(DDD) 00000-0000',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(15)
  phone: string;
}
