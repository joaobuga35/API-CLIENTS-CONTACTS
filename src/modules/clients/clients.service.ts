import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './repositories/clients.repository';

@Injectable()
export class ClientsService {
  constructor(private clientRepository: ClientRepository) {}
  create(createClientDto: CreateClientDto) {
    return this.clientRepository.create(createClientDto);
  }

  findAll() {
    return this.clientRepository.findAll();
  }

  findOne(id: string) {
    return this.clientRepository.findOne(id);
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(id, updateClientDto);
  }

  remove(id: string) {
    return this.clientRepository.delete(id);
  }
}
