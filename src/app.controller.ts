import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root(): { I: string } {
    return {
      I: 'love 🥔',
    };
  }
}
