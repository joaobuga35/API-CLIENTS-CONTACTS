import { PrismaService } from 'src/database/prisma.service';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { ClientRepository } from '../clients.repository';
import { plainToInstance } from 'class-transformer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientPrismaRepository implements ClientRepository {
  constructor(private prisma: PrismaService) {}
  

  async create(data: CreateClientDto): Promise<Client> {
    const client = new Client();
    Object.assign(client, {
      ...data,
    });

    const newClient = await this.prisma.client.create({
      data: client,
    });

    return plainToInstance(Client, newClient);
  }
  async findAll(): Promise<Client[]> {
    const allClients = await this.prisma.client.findMany();

    return plainToInstance(Client, allClients);
  }
  async findOne(id: string): Promise<Client> {
    const client = await this.prisma.client.findUnique({
      where: {
        id: id,
      },
    });

    return plainToInstance(Client, client);
  }
  async findByEmail(email: string): Promise<Client> {
    const client = await this.prisma.client.findUnique({
      where: {
        email
      }
    })
    return client
  }
  async update(id: string, data: UpdateClientDto): Promise<Client> {
    const newClient = await this.prisma.client.update({
      where: {
        id: id,
      },
      data: { ...data },
    });

    return plainToInstance(Client, newClient);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.client.delete({
      where: {
        id: id,
      },
    });
  }
}
