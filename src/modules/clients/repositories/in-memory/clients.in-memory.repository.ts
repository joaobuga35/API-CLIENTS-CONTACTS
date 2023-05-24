/* eslint-disable prettier/prettier */
import { clients } from 'src/database/db';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { ClientRepository } from '../clients.repository';

export class ClientsInMemoryRepository implements ClientRepository {
  create(data: CreateClientDto): Client | Promise<Client> {
    const newClient = new Client()
    Object.assign(newClient,{
      ...data
    })

    clients.push(newClient)
    return newClient
  }
  findAll(): Client[] | Promise<Client[]> {
    return clients
  }
  findOne(id: string): Client | Promise<Client> {
    const findIndexID = clients.findIndex((client) => client.id === id)
    return clients[findIndexID]
  }
  update(id: string, data: UpdateClientDto): Client | Promise<Client> {
    const findIndexID = clients.findIndex((client) => client.id === id)
    clients[findIndexID] = {...clients[findIndexID], ...data}
    return clients[findIndexID]
  }
  delete(id: string): void | Promise<void> {
    const findIndexID = clients.findIndex((client) => client.id === id)
    clients.splice(findIndexID, 1)
  }
}
