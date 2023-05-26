import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactRepository } from './repositories/contacts.repositories';
import { ContactPrismaRepository } from './repositories/prisma/contact.prisma.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ContactsController],
  providers: [
    ContactsService,
    PrismaService,
    {
      provide: ContactRepository,
      useClass: ContactPrismaRepository,
    },
  ],
})
export class ContactsModule {}
