import { join } from 'path';
import IGlobal from 'src/master/global/global.interface';
import { ConfigService } from 'src/module/share/config/config.service';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export async function getPostgresOptions(configService: ConfigService): Promise<DataSourceOptions & SeederOptions> {
  const dbConfig: IGlobal = await configService.getConfig();

  return {
    type: 'postgres',
    host: dbConfig['DATABASE.HOST'],
    port: Number(dbConfig['DATABASE.PORT']),
    username: dbConfig['DATABASE.USER'],
    password: dbConfig['DATABASE.PASSWORD'],
    database: dbConfig['DATABASE.NAME'],
    entities: [join(__dirname, '..', 'module', `/**/*.entity{.ts,.js}`)],
    synchronize: false,
    logging: ['error'],
    seeds: ['src/database/seeds/**/main.seed{.ts,.js}'],
    factories: ['src/database/factories/**/main.seed{.ts,.js}'],
    logger: 'debug',
  };
}

export async function createDataSource(configService: ConfigService): Promise<DataSource> {
  const postgresOptions = await getPostgresOptions(configService);
  return new DataSource({
    ...postgresOptions,
    migrations: ['src/database/migrations/**/*{.ts,.js}'],
  });
}
