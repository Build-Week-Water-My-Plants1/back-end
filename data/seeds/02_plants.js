
exports.seed = async function(knex) {
  await knex('plants').insert([
    {id: 1, nickname: 'Croton', species: 'Common Croton', h2oFrequency: 'once a week', plant_users_id: 1},
    {id: 2, nickname: 'Dandelion', species: 'Common Dandelion', h2oFrequency: 'twice a week', plant_users_id: 1},
    {id: 3, nickname: 'Orchid', species: 'Common Orchid', h2oFrequency: 'twice a week', plant_users_id: 2},
    {id: 1, nickname: 'Dracaena', species: 'Common Dracaena', h2oFrequency: 'once a month', plant_users_id: 2},
    {id: 2, nickname: 'Bamboo', species: 'Common Bamboo', h2oFrequency: 'once a month', plant_users_id: 1}
  ])
}