import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly logger: Logger) {}

  getHello(): string {
    return 'Hello World!';
  }

  blocking(): object {
    const now = new Date().getTime();

    while (new Date().getTime() < now + 10000) {}

    return {};
  }

  nonBlocking(): Promise<object> {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        resolve();
      }, 10000);
    });
  }

  async promises(): Promise<object[]> {
    const results = [];

    for (let i = 0; i < 10; i++) {
      results.push(await this.sleep(i));
    }

    return results;
  }

  private sleep(id: number): Promise<object> {
    return new Promise((resolve) => {
      this.logger.log(`Start sleep #${id}`);

      setTimeout(() => {
        this.logger.log(`Start complete #${id}`);
        resolve({ id });
      }, 1000);
    });
  }
}
