export const up = (knex) => {
  return knex.schema.createTable('toPackList', (table) => {
    table.increments().primary()
    table.string('itemToPack')
    table.string('checkBeforePacking')
    table.integer('hasBeenPacked')
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('toPackList')
}
