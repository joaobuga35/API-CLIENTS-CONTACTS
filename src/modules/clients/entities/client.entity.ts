import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class Client {
  readonly id: string;
  name: string;

  @Exclude()
  password: string;

  email: string;
  number: string;
  readonly createdAt: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = String(new Date());
  }
}
