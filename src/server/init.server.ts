import {
  BadRequestException,
  INestApplication,
  NestApplicationOptions,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import basicAuth from 'express-basic-auth';
import 'reflect-metadata';
import { AppModule } from '../app.module';
import { consola } from 'consola';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';
import { CustomValidationPipe } from 'src/common/pipe/custom.pipe';
import { readFileSync } from 'fs';

interface Init {
  port: string;
  prePort: number;
  user: string;
  password: string;
}

class Main {
  private flag: number = 0;
  private config: NestApplicationOptions = {
    httpsOptions: {
      key: readFileSync(__dirname + "/private-key.pem"),
      cert: readFileSync(__dirname + "/certificate.crt"),
    },
    cors: true,
    logger: ['error', 'warn', 'verbose', 'debug', 'fatal'],
    snapshot: true,
  };
  private validationConfig: ValidationPipeOptions = {
    disableErrorMessages: false,
    whitelist: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
    forbidNonWhitelisted: false,
    // exceptionFactory: (errors) => {
    //   return new BadRequestException(
    //     errors.map((error) => {
    //       const errorType =
    //         error.constraints != null
    //           ? error.constraints[Object.keys(error.constraints)[Object.keys(error.constraints).length - 1]]
    //           : 'failed';
              
    //       return errorType;
    //     }),
    //   );
    // },
  };
  private configSwaggerB = {
    swaggerOptions: {
      displayOperationId: true,
      persistAuthorization: true,
    },
    customSiteTitle: process.env.SWAGGER_TITLE,
    customCss: '.swagger-ui .topbar {display: none; }',
  };
  private configSwaggerA = new DocumentBuilder()
    .setTitle(String(process.env.SWAGGER_TITLE))
    .setDescription(String(process.env.SWAGGER_DESCRIPTION))
    .setVersion('')
    .addBearerAuth({ in: 'header', type: 'http' }, 'Token')
    .addSecurityRequirements('Token')
    .build();

  pipe = async (app: INestApplication): Promise<void> => {
    try {
      app.useGlobalPipes(new CustomValidationPipe());
      consola.success(' Pipe');
    } catch (error) {
      consola.log(error);
      consola.fail(' Pipe');
      this.flag++;
    }
  };

  swagger = async (app: INestApplication, init: Init): Promise<void> => {
    try {
      app.use(
        ['/api'],
        basicAuth({
          challenge: true,
          users: {
            [init.user]: init.password,
          },
        }),
      );
      const document = SwaggerModule.createDocument(app, this.configSwaggerA);
      SwaggerModule.setup('api', app, document, this.configSwaggerB);
      consola.success(' Swagger');
    } catch (error) {
      consola.log(error);
      consola.fail(' Swagger');
      this.flag++;
    }
  };

  onInit = (app: INestApplication, configService: any): Init => {
    return {
      port: String(configService.get('PORT' as never)),
      prePort: 3100,
      user: String(configService.get('SWAGGER_USER' as never)),
      password: String(configService.get('SWAGGER_PASSWORD' as never)),
    };
  };

  async shutdown(app) {
    try {
      // Perform your cleanup actions
      await app.close();
      consola.log('Cleanup finished. Shutting down.');
    } catch (error) {
      consola.error('Error during shutdown', error);
    } finally {
      process.exit(0);
    }
  }

  run = async (): Promise<void> => {
    const app = await NestFactory.create(AppModule, this.config);

    app.enableCors({
      origin: ['http://222.255.1.152', 'https://anhoangstore.xyz'], 
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
      credentials: false, 
      allowedHeaders: 'Content-Type, Accept',
    });

    const configService = app.get(ConfigService);
    const swagger = String(configService.get('SWAGGER'));

    app.useGlobalFilters(new HttpExceptionFilter());
    const init = this.onInit(app, configService);

    // console.clear();
    consola.start(' Booting server');

    await this.pipe(app);

    if (swagger == 'ON') {
      await this.swagger(app, init);
    }
    await app.listen(init.port || init.prePort, '0.0.0.0');

    if (!this.flag) {
      consola.box(`Server is running on port ${init.port || init.prePort}`);
    } else {
      consola.error(' Config server failed');
    }

    process.on('SIGTERM', () => {
      this.shutdown(app);
    });
  };
}

export default Main;
