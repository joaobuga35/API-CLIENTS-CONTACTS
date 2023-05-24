import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientRepository } from './repositories/clients.repository';
import { ClientsInMemoryRepository } from './repositories/in-memory/clients.in-memory.repository';

@Module({
  controllers: [ClientsController],
  providers: [
    ClientsService,
    {
      provide: ClientRepository,
      useClass: ClientsInMemoryRepository,
    },
  ],
})
export class ClientsModule {}
