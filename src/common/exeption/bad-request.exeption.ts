import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomBadRequestException extends HttpException {
    constructor(message: string) {
      super(
        {
          message: message,
          error: 'Validate failed',
          statusCode: HttpStatus.BAD_REQUEST,
          flag: true
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }