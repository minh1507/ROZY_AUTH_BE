import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService extends Logger {
  async logBigMessage() {
    const figlet = (await import('figlet')).default;
    const chalk = (await import('chalk')).default;

    const rozyAscii = figlet.textSync('ROZY', {
      font: 'Isometric1',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    });

    const styledMessage = chalk.magenta(rozyAscii);

    console.log(styledMessage);
  }
}
