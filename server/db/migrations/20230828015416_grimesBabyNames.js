export const up = (knex) => {
  return knex.schema.createTable('grimesBabyNames', (table) => {
    table.increments().primary()
    table.string('possibleName')
  })
}

export const down = (knex) => {
  return knex.schema.dropTable('grimesBabyNames')
}
