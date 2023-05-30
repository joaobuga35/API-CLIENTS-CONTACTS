import { PrismaService } from "src/database/prisma.service";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { UpdateContactDto } from "../../dto/update-contact.dto";
import { Contact } from "../../entities/contact.entity";
import { ContactRepository } from "../contacts.repositories";
import { plainToInstance } from "class-transformer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ContactPrismaRepository implements ContactRepository {
    constructor(private prisma: PrismaService){}

    async create(data: CreateContactDto, clientId: string): Promise<Contact> {
        const contact = new Contact();
        Object.assign(contact, {
          ...data,
          image: data.image || null
        });
    
        const newContact = await this.prisma.contact.create({
          data: {
            id: contact.id,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            image: contact.image,
            createdAt: contact.createdAt,
            clientId,
          },
        });
    
        return plainToInstance(Contact, newContact);
      }
      async findAll(): Promise<Contact[]> {
        const allContacts = await this.prisma.contact.findMany();
    
        return plainToInstance(Contact, allContacts);
      }
      async findOne(id: string): Promise<Contact> {
        const contact = await this.prisma.contact.findUnique({
          where: {
            id: id,
          },
        });
    
        return plainToInstance(Contact, contact);
      }
      async findByEmail(email: string): Promise<Contact> {
        const contact = await this.prisma.contact.findUnique({
          where: {
            email: email
          }
        })
        return contact
      }
      async findByPhoneNumber(phone: string):Promise<Contact> {
        const contact = await this.prisma.contact.findUnique({
          where: {
            phone: phone
          }
        })
        return contact;
      }
      async update(id: string, data: UpdateContactDto): Promise<Contact> {
        const newContact = await this.prisma.contact.update({
          where: {
            id: id,
          },
          data: { ...data },
        });
    
        return plainToInstance(Contact, newContact);
      }
      async delete(id: string): Promise<void> {
        await this.prisma.contact.delete({
          where: {
            id: id,
          },
        });
      }
  }