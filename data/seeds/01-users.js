const bcrypt = require("bcryptjs")
const hash = async password => await bcrypt.hash(password, 13)

exports.seed = async function(knex) {
  await knex('users').truncate
  await knex('users').insert([
    {
      id: 6,
      username: "NewUser5",
      phone_number: 1234,
      password: `${await hash("password")}`
    },
    {
      id: 7,
      username: "NewUser6",
      phone_number: 12345,
      password: `${await hash("password")}`
    }
  ])
}