import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDespesas1623951829980 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'despesas',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'responsaveis_id',
                        type: 'uuid'
                    },
                    {
                        name: "local_compra",
                        type: "varchar"
                    },
                    {
                        name: 'data_compra',
                        type: 'Date'
                    },
                    {
                        name: 'valor',
                        type: 'number'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKResponsavel',
                        referencedTableName: 'responsaveis',
                        referencedColumnNames: ['id'],
                        columnNames: ['responsaveis_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('despesas')
    }

}
