import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repositories/contacts.repositories';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactRepository) {}
  create(createContactDto: CreateContactDto) {
    return this.contactRepository.create(createContactDto);
  }

  findAll() {
    return this.contactRepository.findAll();
  }

  findOne(id: string) {
    return this.contactRepository.findOne(id);
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return this.contactRepository.update(id, updateContactDto);
  }

  remove(id: string) {
    return this.contactRepository.delete(id);
  }
}
