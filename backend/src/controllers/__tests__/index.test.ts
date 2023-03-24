import request from 'supertest'
import {expect, jest, test} from '@jest/globals';
import app from "../../app";

describe("GET /random", () => {

  describe("Test if jest configured correctly", () => {
        test("simple pass expected test", async () => {
            expect('working?').toBe('working?');
        });
    })

  describe("when button is clicked", () => {
    test("should respond with a json object containing random number and 200 status code", async () => {
      const response = await request(app).get(`/random`)
      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
      expect(response.body.random).toBeDefined()
      const respJson = response.body.random;
      expect(typeof respJson).toBe('number')
    })
  })
})


