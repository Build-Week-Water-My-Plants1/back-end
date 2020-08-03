
const supertest = require("supertest")
const server = require("./api/server")
const db = require("./data/db-config")
const jwt = require("jsonwebtoken")
const secret = require("./config/secrets")
const Users = require("./users/users-model")


describe('server.js', () => {
  beforeEach(async () => {
    await db('users').truncate(); 
  })
 
  //REGISTER

  describe('POST /auth/register', () => {
    it('add a user to the database', async () => {
      const users = await db('users');
      expect(users).toHaveLength(0);
      await Users.add({
        username: 'NewUser',
        phone_number: '1234567891',
        password: 'password',
      })
      const newUsers = await db('users');
      expect(newUsers).toHaveLength(1);
    })
    it('check added user', async () => {
      const users = await db('users');
      expect(users).toHaveLength(0);
      await Users.add({
        username: 'NewUser',
        phone_number: '1234567891',
        password: 'password'
      })
    })
    it('200', () => {
      return supertest(server).post('/api/auth/register')
        .send({
          username: 'newuser',
          phone_number: '2483804900',
          password: 'pw',
        })
        .expect(200);
    })
  })

  //LOGIN

  describe('POST /api/auth/login', () => {
    it('return JSON', async () => {
      return supertest(server).post('/api/auth/login')
        .then(res => {
          expect(res.type).toMatch(/json/i)
        })
    })
    it('201', async () => {
      res = await supertest(server)
        .post('/api/auth/register')
        .send({
          username: 'alex',
          phone_number: '98933212345',
          password: '123t'
        });
      expect(res.status).toEqual(201);
      res = await supertest(server)
        .post('/api/auth/login')
        .send({
          username: 'alex',
          password: '123t'
        });
      expect(res.status).toEqual(201);
    })
  })

})