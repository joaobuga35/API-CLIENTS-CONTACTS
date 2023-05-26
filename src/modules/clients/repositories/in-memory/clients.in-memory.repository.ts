import {plainToInstance} from 'class-transformer'
import { clients } from 'src/database/db';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { ClientRepository } from '../clients.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsInMemoryRepository implements ClientRepository {
  findByEmail(email: string): Client | Promise<Client> {
    throw new Error('Method not implemented.');
  }
  create(data: CreateClientDto): Client | Promise<Client> {
    const newClient = new Client()
    Object.assign(newClient,{
      ...data
    })

    clients.push(newClient)
    return plainToInstance(Client,newClient)
  }
  findAll(): Client[] | Promise<Client[]> {
    return plainToInstance(Client,clients)
  }
  findOne(id: string): Client | Promise<Client> {
    const findIndexID = clients.findIndex((client) => client.id === id)
    return plainToInstance(Client,clients[findIndexID])
  }
  update(id: string, data: UpdateClientDto): Client | Promise<Client> {
    const findIndexID = clients.findIndex((client) => client.id === id)
    clients[findIndexID] = {...clients[findIndexID], ...data}
    return plainToInstance(Client,clients[findIndexID])
  }
  delete(id: string): void | Promise<void> {
    const findIndexID = clients.findIndex((client) => client.id === id)
    clients.splice(findIndexID, 1)
  }
}
