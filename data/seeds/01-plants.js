
exports.seed = async function(knex) {
  await knex('plants').insert([
    {nickname: 'Croton', species: 'Common Croton', h2oFrequency: 'once a week', user_id: 1},
    {nickname: 'Dandelion', species: 'Common Dandelion', h2oFrequency: 'twice a week', user_id: 1},
    {nickname: 'Orchid', species: 'Common Orchid', h2oFrequency: 'twice a week', user_id: 2},
    {nickname: 'Dracaena', species: 'Common Dracaena', h2oFrequency: 'once a month', user_id: 2},
    {nickname: 'Bamboo', species: 'Common Bamboo', h2oFrequency: 'once a month', user_id: 1}
  ])
}