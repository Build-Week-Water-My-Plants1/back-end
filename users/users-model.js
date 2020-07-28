const db = require("../data/db-config")
const bcrypt = require("bcryptjs")


module.exports = {
    register,
    login,
    find,
    add,
    findById,
    findBy,
    remove,
    update
}

async function register(data){
    const {password} = data;
    data.password = hash(password);

    const [id] = await  db('users').insert(data, 'id')
    const user = await getUserBy({id});

    return user;
}

function login(data){
    const {username,password} = data;

    return getUserBy({username}).then(user =>{
        if(user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user);
            return {
                id:user.id,
                username:username,
                token:token
            }
        }
    });
    ;
}


function find() {
    return db("users")
      .select("id", "username", "phone_number")
}

function findById(id) {
    return db("users")
      .where({ id })
      .first()
}

async function add(user) {
    user.password = await bcrypt.hash(user.password, 13)
    return db("users")
      .insert(user)
      .returning("*")
}

function findBy(filter) {
    return db("users")
      .where(filter)
      .select()
      .first()
}

function remove(id) {
    return db('users')
      .where({ id })
      .delete()
}

function update(change, id) {
    return db("users")
      .where({ id })
      .update(change)
      .returning("*")
}



