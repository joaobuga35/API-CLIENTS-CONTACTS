import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  number: string;
  image: string | null;
  readonly createdAt: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = String(new Date());
  }
}
