import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { join } from 'path';

config();

export const postgresOption: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [join(__dirname, '..', 'module', `/**/*.entity{.ts,.js}`)],
  synchronize: false,
  logging: ['error'],
  seeds: ['src/database/seeds/**/main.seed{.ts,.js}'],
  factories: ['src/database/factories/**/main.seed{.ts,.js}'],
  logger: 'debug',
};

export const dataSource = new DataSource({
  ...postgresOption,
  migrations: ['src/database/migrations/**/*{.ts,.js}'],
});
