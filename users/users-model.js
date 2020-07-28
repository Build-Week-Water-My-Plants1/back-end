const db = require("../data/db-config")
const bcrypt = require("bcryptjs")


module.exports = {
    find,
    add,
    findById,
    findByFilter,
    findBy,
    updateUser,
    getUsers,
    getUserPlant,
    addPlant,
    updatePlant,
    removePlant,
    removeUser
}

//User

function find() {
    return db("users")
      .select("id", "username", "phone_number")
}

function findBy(filter) {
    return db("users")
        .where(filter)
        .select()
        .first()
}

function findById(id) {
    return db("users")
      .select("*")
      .where("id", id)
      .first()
}

function findByFilter(filter) {
    return db("users")
      .select("*")
      .where("username", filter)
      .first();
  }

async function add(data) {
    const [newUserId] = await db
      .insert(data, "id")
      .into("users")
    const newUser = await db
      .first("id", "username", "phone_number")
      .from("users")
      .where("id", newUserId)
    return newUser
}

function getUsers() {
    return db("users")
      .select("id", "username", "phone_number")
}

async function updateUser(changes, id) {
    await db("users")
      .update(changes)
      .where("id", id)
    return await db
      .first("id", "username", "phone_number")
      .from("users")
      .where("id", id)
      .select("id", "username", "phone_number")
}

function removeUser(id) {
    return db("users")
      .first("*")
      .where("id", id)
      .del()
}

//Plants

async function addPlant(object) {
    const [newPlantId] = await db
      .insert(object, "id")
      .into("plants")
    const newPlant = await db
      .first("*")
      .from("plants")
      .where("id", newPlantId)
    return newPlant
}

function getUserPlant(user_id) {
    return db("plants")
      .innerJoin("users as u", "u.id", "plants.user_id")
      .where("plants.user_id", user_id)
      .select("plants.id as id", "plants.nickname", "plants.species", "plants.h2oFrequency")
         
}

async function updatePlant(changes, id) {
    await db("plants")
      .update(changes)
      .where("id", id)
    return await db
      .first("*")
      .from("plants")
      .where("id", id)
}

async function removePlant(id) {
    const deleted = await db
      .first("*")
      .from("plants")
      .where("id", id)
    if (deleted) {
        await db("plants")
          .where("id", id)
          .del()
        return deleted
    } else {
        return null
    }
}
