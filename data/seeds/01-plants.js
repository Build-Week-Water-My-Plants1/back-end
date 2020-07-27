
exports.seed = async function(knex) {
  await knex('plants').insert([
    {name: 'Croton', type: 'Common Croton', location: 'backyard', user_id: 1},
    {name: 'Dandelion', type: 'Common Dandelion', location: 'backyard', user_id: 1},
    {name: 'Orchid', type: 'Common Orchid', location: 'backyard', user_id: 1},
    {name: 'Dracaena', type: 'Common Dracaena', location: 'backyard', user_id: 1},
    {name: 'Bamboo', type: 'Common Bamboo', location: 'backyard', user_id: 1}
  ])
}