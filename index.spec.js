const server = require("./api/server")
const supertest = require("supertest")
const db = require("./data/db-config")
const serverAPI = require("./api/server")
const { expectCt } = require("helmet")

require("dotenv").config()

beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy()
})


describe("test to check if API is running", () => {
    it("GET /", async () => {
        const res = await supertest(serverAPI).get("/")
        expect(res.statusCode).toBe(200)
        expect(res.body.message).toBe("Water My Plants App")
    })

    it("POST /register", async () => {
        const res = await supertest(serverAPI).post("/api/auth/register").send({
            username: "NewUser5",
            phone_number: "1234",
            password: "test",
            
        })
        expect(res.statusCode).toBe(201)
        expect(res.body).toBeDefined()
    })

    it("GET /api/auth/users", async () => {
        const res = await supertest(serverAPI).get("/api/auth/users")
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeDefined();
      });
    
    it("POST /api/auth/login", async () => { 
       const res = await supertest(serverAPI).post("/api/auth/login").send({
          username: "NewUser5",
          password: "123abc"
       });
       expect(res.statusCode).toBe(201);
       expect(res.body.message).toBe("Welcome NewUser5");
    });       
    
    it("POST /login & PUT /api/auth/users/:id", async () => { 
        const res1 = await supertest(serverAPI).post("/api/auth/login").send({
          username: "NewUser5",
          password: "123abc"
        });
        
        const res2 = await supertest(serverAPI)
        .put("/api/auth/users/1")
        .set("authorization", res1.body.token)
        .send({
            username: "Tatyana",
            password: "123abc",
            phone_number: "changed"
        })
    
        expect(res2.statusCode).toBe(200);
        expect(res2.body.phone_number).toBe("changed");
    })

})