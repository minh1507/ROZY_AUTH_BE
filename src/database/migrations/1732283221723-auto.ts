import { MigrationInterface, QueryRunner } from 'typeorm';

export class Auto1732283221723 implements MigrationInterface {
  name = 'Auto1732283221723';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ethnic" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "code" character varying(25) NOT NULL, "name" character varying(100) NOT NULL, "isFreeze" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_652cd6a7b67f8faec4475446473" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "ethnic"`);
  }
}
