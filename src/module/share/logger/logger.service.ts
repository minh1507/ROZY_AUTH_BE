import { Injectable, Logger } from '@nestjs/common';
import consola from 'consola';
import { TraceIdService } from '../trace/trace.service';

@Injectable()
export class LoggerService extends Logger {
  constructor(private readonly traceIdService: TraceIdService) {
    super();
  }

  async logBigMessage() {
    const figlet = (await import('figlet')).default;
    const chalk = (await import('chalk')).default;

    const rozyAscii = figlet.textSync('EFIN', {
      font: 'Isometric1',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    });

    const styledMessage = chalk.magenta(rozyAscii);

    consola.log(styledMessage);
  }

  public getTraceId(): string {
    return this.traceIdService.getTraceId();
  }

  error(message: string) {
    const traceId = this.getTraceId();
    const formattedMessage = `[${traceId}] ${message}`;

    consola.error(formattedMessage);
  }

  trace(
    message: string,
    type: null | 'REPOSITORY' | 'CONTROLLER' | 'SERVICE' = null,
  ) {
    const traceId = this.getTraceId();
    const formattedMessage =
      `[${traceId}]` + type ? `[${type}]` : `` + ` ${message}`;

    consola.log(formattedMessage);
  }
}
