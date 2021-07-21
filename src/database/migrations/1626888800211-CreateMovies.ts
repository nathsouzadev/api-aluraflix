import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovies1626888800211 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "movies",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "url",
                        type: "varchar"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
