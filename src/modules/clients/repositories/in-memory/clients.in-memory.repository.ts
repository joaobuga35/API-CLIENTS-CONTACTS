/* eslint-disable prettier/prettier */
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { ClientRepository } from '../clients.repository';

export class ClientsInMemoryRepository implements ClientRepository {
  create(data: CreateClientDto): Client | Promise<Client> {
    const newClient = new Client()
    const date = new Date();
    Object.assign(newClient,{
      ...date
    })
    return newClient
  }
  findAll(): Client[] | Promise<Client[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Client | Promise<Client> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdateClientDto): Client | Promise<Client> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): void | Promise<void> {
    throw new Error('Method not implemented.');
  }
}
