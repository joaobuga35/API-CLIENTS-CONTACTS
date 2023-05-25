/* eslint-disable prettier/prettier */
import { contacts } from 'src/database/db';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { ContactRepository } from '../contacts.repositories';

export class ContactInMemoryRepository implements ContactRepository {
    create(data: CreateContactDto): Contact | Promise<Contact> {
        const newContacts = new Contact()
        Object.assign(newContacts,{
          ...data,
          image: data.image || null,
        })
    
        contacts.push(newContacts)
        return newContacts
      }
      findAll(): Contact[] | Promise<Contact[]> {
        return contacts
      }
      findOne(id: string): Contact | Promise<Contact> {
        const findIndexID = contacts.findIndex((Contacts) => Contacts.id === id)
        return contacts[findIndexID]
      }
      update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
        const findIndexID = contacts.findIndex((Contacts) => Contacts.id === id)
        contacts[findIndexID] = {...contacts[findIndexID], ...data}
        return contacts[findIndexID]
      }
      delete(id: string): void | Promise<void> {
        const findIndexID = contacts.findIndex((Contacts) => Contacts.id === id)
        contacts.splice(findIndexID, 1)
      }
}
