export const seed = (knex) => {
  return knex('toPackList').insert([
    {
      itemToPack: 'Tent',
      checkBeforePacking: 'Poles, pegs, hammer',
      hasBeenPacked: 'no',
    },
    {
      itemToPack: 'Chilly Bin',
      checkBeforePacking: 'Freeze it the night before leaving',
      hasBeenPacked: 'no',
    },
    {
      itemToPack: 'Matress blower',
      checkBeforePacking: 'Has it been charged overnight?',
      hasBeenPacked: 'no',
    },
  ])
}
