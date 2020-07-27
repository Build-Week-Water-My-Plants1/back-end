
exports.seed = async function(knex) {
  await knex('users').insert([
    {
      id: 1,
      first_name: "Alex",
      last_name: "Smith",
      username: "NewUser",
      email: "alex@gmai.com",
      password: "123abc"
    }
  ])
}