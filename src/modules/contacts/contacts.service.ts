import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repositories/contacts.repositories';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactRepository) {}
  async create(createContactDto: CreateContactDto, clientId: string) {
    const contactData = await this.contactRepository.findAll(clientId)
    const verifyEmail = contactData.some((elem) => elem.email === createContactDto.email)
    const verifyPhone = contactData.some((elem) => elem.phone === createContactDto.phone)

    if (verifyEmail) {
      throw new ConflictException('Email already exists!')
    }

    if (verifyPhone) {
      throw new ConflictException('Phone already exists!')
    }
    const contact = await this.contactRepository.create(createContactDto, clientId);
    return contact;
  }

  async findAll(clientId: string) {
    const contacts = await this.contactRepository.findAll(clientId);
    return contacts;
  }

  async findOne(id: string) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found!');
    }
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto, clientId: string) {
    const contact = await this.contactRepository.findOne(id);
    const contactData = await this.contactRepository.findAll(clientId)

    if (updateContactDto.email) {
      const verifyEmail = contactData.some((elem) => elem.email === updateContactDto.email)
      if (verifyEmail) {
        throw new ConflictException('Email already exists!')
      }
    }

    if (updateContactDto.phone) {
      const verifyPhone = contactData.some((elem) => elem.phone === updateContactDto.phone)
      if (verifyPhone) {
        throw new ConflictException('Phone already exists!')
      }
    }
    
    if (!contact) {
      throw new NotFoundException('Contact not found!');
    }
    return await this.contactRepository.update(id, updateContactDto, clientId);
  }

  async remove(id: string) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found!');
    }
    return await this.contactRepository.delete(id);
  }
}
