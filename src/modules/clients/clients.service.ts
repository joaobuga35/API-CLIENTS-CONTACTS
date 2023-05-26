import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from './repositories/clients.repository';

@Injectable()
export class ClientsService {
  constructor(private clientRepository: ClientRepository) {}
  async create(createClientDto: CreateClientDto) {
    const findUser = await this.clientRepository.findByEmail(
      createClientDto.email,
    );
    if (findUser) {
      throw new ConflictException('Email already exists');
    }
    const client = await this.clientRepository.create(createClientDto);
    return client;
  }

  async findAll() {
    const clients = await this.clientRepository.findAll();
    return clients;
  }

  async findOne(id: string) {
    const client = await this.clientRepository.findOne(id);

    if (!client) {
      throw new NotFoundException('User not found!');
    }
    return client;
  }

  async findByEmail(email: string) {
    const user = await this.clientRepository.findByEmail(email);
    return user;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.findOne(id);
    if (!client) {
      throw new NotFoundException('User not found!');
    }

    const findUser = await this.clientRepository.findByEmail(
      updateClientDto.email,
    );
    if (findUser) {
      throw new ConflictException('Email already exists');
    }
    const updateClient = await this.clientRepository.update(
      id,
      updateClientDto,
    );
    return updateClient;
  }

  async remove(id: string) {
    const client = await this.clientRepository.findOne(id);
    if (!client) {
      throw new NotFoundException('User not found!');
    }
    const removeClient = await this.clientRepository.delete(id);
    return removeClient;
  }
}
