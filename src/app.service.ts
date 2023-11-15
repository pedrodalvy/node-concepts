import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  blocking(): object {
    const now = new Date().getTime();

    while (new Date().getTime() < now + 10000) {}

    return {};
  }
}
