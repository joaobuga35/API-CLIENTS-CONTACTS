/* eslint-disable prettier/prettier */
import {plainToInstance} from 'class-transformer'
import { contacts } from 'src/database/db';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { ContactRepository } from '../contacts.repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactInMemoryRepository implements ContactRepository {
  findByEmail(email: string): Contact | Promise<Contact> {
    throw new Error('Method not implemented.');
  }
    create(data: CreateContactDto): Contact | Promise<Contact> {
        const newContacts = new Contact()
        Object.assign(newContacts,{
          ...data,
          image: data.image || null,
        })
    
        contacts.push(newContacts)
        return plainToInstance(Contact,newContacts)
      }
      findAll(): Contact[] | Promise<Contact[]> {
        return plainToInstance(Contact,contacts)
      }
      findOne(id: string): Contact | Promise<Contact> {
        const findIndexID = contacts.findIndex((Contacts) => Contacts.id === id)
        return plainToInstance(Contact,contacts[findIndexID])
      }
      update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
        const findIndexID = contacts.findIndex((Contacts) => Contacts.id === id)
        contacts[findIndexID] = {...contacts[findIndexID], ...data}
        return plainToInstance(Contact,contacts[findIndexID])
      }
      delete(id: string): void | Promise<void> {
        const findIndexID = contacts.findIndex((Contacts) => Contacts.id === id)
        contacts.splice(findIndexID, 1)
      }
}
