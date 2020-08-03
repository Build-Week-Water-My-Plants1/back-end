
const bcrypt = require("bcryptjs")
const hash = async password => await bcrypt.hash(password, 13)

exports.seed = async function(knex) {
  await knex('users').truncate
  await knex('users').insert([
    {
      username: "NewUser7",
      phone_number: 12434,
      password: `${await hash("password")}`
    },
    {
      username: "NewUser8",
      phone_number: 124345,
      password: `${await hash("password")}`
    }
  ])
}