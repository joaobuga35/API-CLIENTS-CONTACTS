import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactRepository } from './repositories/contacts.repositories';
import { ContactInMemoryRepository } from './repositories/in-memory/contacts.in-memory.repository';

@Module({
  controllers: [ContactsController],
  providers: [
    ContactsService,
    {
      provide: ContactRepository,
      useClass: ContactInMemoryRepository,
    },
  ],
})
export class ContactsModule {}
