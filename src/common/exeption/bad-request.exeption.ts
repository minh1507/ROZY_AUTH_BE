import { HttpException, HttpStatus } from '@nestjs/common';
import { LoggerService } from 'src/module/share/logger/logger.service';

export class CustomBadRequestException extends HttpException {
  constructor(
    message: string,
    private readonly logger: LoggerService,
  ) {
    logger.trace(`[EXEPTION][400] ${message}`);

    super(
      {
        status: {
          code: HttpStatus.BAD_REQUEST,
          success: false,
        },
        message: {
          failed: message,
        },
        ui: {
          flag: true,
        },
        trace: {
          id: logger.getTraceId(),
        },
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
