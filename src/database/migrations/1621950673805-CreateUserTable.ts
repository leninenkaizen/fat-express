import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateUserTable1621950673805 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "bigint",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "email",
                    type: "varchar",
                    length: '60',
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "firstName",
                    type: "varchar",
                    length: '50'
                },
                {
                    name: "lastName",
                    type: "varchar",
                    length: '50'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }
}
