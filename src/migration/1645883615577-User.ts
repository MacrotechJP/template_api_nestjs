import {MigrationInterface, QueryRunner} from "typeorm";

export class User1645883615577 implements MigrationInterface {
    name = 'User1645883615577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`created_at\``);
    }

}
