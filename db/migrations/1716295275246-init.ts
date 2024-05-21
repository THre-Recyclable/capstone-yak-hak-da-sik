import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1716295275246 implements MigrationInterface {
    name = 'Init1716295275246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "med_references" ("id" integer NOT NULL, CONSTRAINT "PK_35bbdf972a57ed4804074d46e72" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pills" ("id" integer NOT NULL, CONSTRAINT "PK_049ae941549e7a3ac88f6e871db" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "meds" ("id" integer NOT NULL, "companyName" character varying NOT NULL, "medName" character varying NOT NULL, "effect" text NOT NULL, "howToUse" text NOT NULL, "criticalInfo" text NOT NULL, "warning" text NOT NULL, "interaction" text NOT NULL, "sideEffect" text NOT NULL, "howToStore" text NOT NULL, CONSTRAINT "PK_7924c2c581bc5a988aa38966632" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "meds"`);
        await queryRunner.query(`DROP TABLE "pills"`);
        await queryRunner.query(`DROP TABLE "med_references"`);
    }

}