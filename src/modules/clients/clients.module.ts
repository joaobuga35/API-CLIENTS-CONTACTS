import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientRepository } from './repositories/clients.repository';
import { ClientPrismaRepository } from './repositories/prisma/clients.prisma.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ClientsController],
  providers: [
    ClientsService,
    PrismaService,
    {
      provide: ClientRepository,
      useClass: ClientPrismaRepository,
    },
  ],
})
export class ClientsModule {}
