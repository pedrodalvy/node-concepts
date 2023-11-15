import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('blocking')
  blocking(): object {
    return this.appService.blocking();
  }

  @Get('nonBlocking')
  nonBlocking(): Promise<object> {
    return this.appService.nonBlocking();
  }

  @Get('promises')
  promises(): Promise<object> {
    return this.appService.promises();
  }

  @Get('parallelPromises')
  parallelPromises(): Promise<object> {
    return this.appService.parallelPromises();
  }
}
