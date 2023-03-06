import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('site_id').notNullable()
      table.string('username').notNullable()
      table.string('firstname').notNullable()
      table.string('lastname').notNullable()
      table.string('email').notNullable()
      table.boolean('ativo').notNullable()
      table.boolean('valido').notNullable()
      table.string('address', 255).notNullable()
      table.string('password', 255).notNullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
