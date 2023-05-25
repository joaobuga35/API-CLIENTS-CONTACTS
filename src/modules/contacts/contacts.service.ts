import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repositories/contacts.repositories';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactRepository) {}
  async create(createContactDto: CreateContactDto) {
    const contact = await this.contactRepository.create(createContactDto);
    return contact;
  }

  async findAll() {
    const contacts = await this.contactRepository.findAll();
    return contacts;
  }

  async findOne(id: string) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found!');
    }
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found!');
    }
    return await this.contactRepository.update(id, updateContactDto);
  }

  async remove(id: string) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found!');
    }
    return await this.contactRepository.delete(id);
  }
}
