export const seed = (knex) => {
  return knex('grimesBabyNames').insert([
    {
      possibleName: 'MC/CD---.Dot',
    },
    {
      possibleName: 'Lightyear-Limewire',
    },
    {
      possibleName: 'Optimus-Von-Cessna-VSH',
    },
    {
      possibleName: '~VonTilda-hyphen-acopaclypticaNova',
    },
    {
      possibleName: 'Linc-Hyperdrive',
    },
    {
      possibleName: 'DOS.=D-Napstar',
    },
    {
      possibleName: 'Caeasar-QuasarII',
    },
  ])
}
