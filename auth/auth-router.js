const router = require("express").Router()
const users = require("../users/users-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secret = require("../config/secrets")

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: "1d"
    }

    return jwt.sign(payload, secret.jwtSecret, options)
}

router.post("/register", async (req, res, next) => {
    const { username, password, phone_number } = req.body

    if (username && password && phone_number) {
        try {
            const user = await users.add(req.body)
            const token = generateToken(user)
            res.status(201).json({ token, message: `Welcome ${user.username}` })
        } catch (err) {
            err.statusCode = 409
            next(err)
        }
    } else {
        res.status(401).json({ message: "Please include username & password & phone number" })
    }
})

// router.post("/login", async (req, res, next) => {
//     try {
//         const { username, password } = req.body

//         const user = await users.findBy({ username }).first()
//         const passwordValid = await bcrypt.compare(password, user.password)
//         if (!user || !passwordValid) {
//             const error = new Error("Invalid credentials")
//             error.statusCode = 401
//             throw error
//         }
//         const token = generateToken(user)

//         res.status(200).json({
//             token,
//             userID: user.id,
//             message: `Welcome ${user.username}`
//         })
//     } catch (err) {
//         next(err)
//     }
// })

router.post("/login", async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await users.findByFilter(username).first();
  
      if(!user) {
        return res.status(401).json({ message: "Username not found!" })
      }
  
      const passwordValid = await bcrypt.compare(password, user.password)
  
      if(!passwordValid) {
          return res.status(401).json({ message: "Your password is incorrect!" })
      }
      const payload = {
        userId: user.id,
        username: user.username,
      }
      const plants = await users.getUserPlants(user.id) // user's plants
      res.status(201).json({ // Returns all user info except password.
        message: `Welcome ${user.username}`,
        token: jwt.sign(payload, process.env.JWT_SECRET),
        id: user.id,
        username: user.username,
        phone_number: user.phone_number,
        plants: plants
      });
  
    } catch (error) {
      next(error);
    }
  });

module.exports = router