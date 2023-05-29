import { Injectable } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { compare } from 'bcryptjs';
import { Client } from '../clients/entities/client.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private clientsService: ClientsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const client = await this.clientsService.findByEmail(email);

    if (client) {
      const matchPassword = await compare(password, client.password);
      if (matchPassword) {
        return { email: client.email };
      }
    }
    return null;
  }

   async login(email: string) {
    const client = await this.clientsService.findByEmail(email)
    
    return {
      token: this.jwtService.sign({ email }, { subject: client.id }),
    };
  }
}
