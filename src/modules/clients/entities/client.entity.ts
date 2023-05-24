import { randomUUID } from 'crypto';

export class Client {
  readonly id: string;
  name: string;
  password: string;
  email: string;
  number: string;
  readonly createdAt: string;

  constructor() {
    this.id = randomUUID();
  }
}
