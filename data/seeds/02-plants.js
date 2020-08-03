exports.seed = async function(knex) {
  await knex('plants').truncate
  await knex('plants').insert([
    {id: 6, nickname: 'Croton1', species: 'Common Croton1', h2oFrequency: 'once a week1', plant_users_id: 6},
    {id: 7, nickname: 'Dandelion1', species: 'Common Dandelion1', h2oFrequency: 'twice a week1', plant_users_id: 7},
    {id: 8, nickname: 'Orchid1', species: 'Common Orchid1', h2oFrequency: 'twice a week1', plant_users_id: 8},
    {id: 9, nickname: 'Dracaena1', species: 'Common Dracaena1', h2oFrequency: 'once a month1', plant_users_id: 9},
    {id: 10, nickname: 'Bamboo1', species: 'Common Bamboo1', h2oFrequency: 'once a month1', plant_users_id: 10}
  ])
} 