const router = require("express").Router()
const users_model = require("../users/users-model")

//GET users
router.get("/users", async (req, res, next) => {
    try {
      const users = await users_model.getUsers()
  
      res.status(200).json(users)
  
    } catch(err) {
      next(err)
    }
})


//GET user by ID
router.get("/users/:id", (req, res, next) => {
    const { id } = req.params

    users_model
        .findById(id)
        .then(user => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({
                    message: "Could not find user with given id"
                })
            }
        })
        .catch(err => {
        next(err)
    })    

})

//UPDATE users by ID
router.put("/users/:id", async (req, res, next) => { 
    try{
      const payload = {
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
        phone_number: req.body.phone_number,
      }
  
      const updatedUser = await users_model.updateUser(payload, req.params.id)
  
      res.status(200).json(updatedUser)
  
    } catch(err) {
      next(err)
    }
})

//DELETE by users ID
router.delete("/users/id", async (req, res, next) => {
    try {
        const { id } = req.params
        const deleteUser = await users_model.removeUser(id)
        res.status(200).json({
            message: `Successfully deleted users profile`
        })
    } catch (err) {
        next(err)
    }
})




module.exports = router

