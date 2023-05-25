import { PrismaService } from 'src/database/prisma.service';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { ClientRepository } from '../clients.repository';
import { plainToInstance } from 'class-transformer';

export class ClientPrismaRepository implements ClientRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateClientDto): Promise<Client> {
    const client = new Client();
    Object.assign(Client, {
      ...data,
    });

    const newClient = await this.prisma.client.create({
      data: client,
    });

    return plainToInstance(Client, newClient);
  }
  //   findAll(): Promise<Client[]> {}
  //   findOne(id: string): Promise<Client> {}
  //   update(id: string, data: UpdateClientDto): Promise<Client> {}
  //   delete(id: string): Promise<void> {}
}
