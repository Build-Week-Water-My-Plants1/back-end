const bcrypt = require("bcryptjs")
const hash = async password => await bcrypt.hash(password, 13)

exports.seed = async function(knex) {
  await knex('user').truncate
  await knex('users').insert([
    {
      id: 1,
      username: "NewUser",
      phone_number: 5543038,
      password: `${await hash("password")}`
    },

    {
      id: 2,
      username: "NewUser",
      phone_number: 5543038,
      password: `${await hash("password")}`
    }
  ])
}