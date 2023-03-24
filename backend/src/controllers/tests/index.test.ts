import request from 'supertest'
import {expect, jest, test} from '@jest/globals';
import app from "../../app";

const baseURL = "http://localhost:3000"

describe("GET /random", () => {

  describe("Test if jest configured correctly", () => {
        test("simple pass expected test", async () => {
            const a = 4;
            expect(a).toBe(4);
        });
    });

  describe("when button is clicked", () => {
    test("should respond with a json object containing random number and 200 status code", async () => {
      const response = await request(app).get(`/random`)
      expect(response.statusCode).toBe(200)
      expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
      expect(response.body.random).toBeDefined()
      const respJson = response.body.random;
      console.log(respJson)
      expect(typeof respJson).toBe('number')
    })
  })

  describe("when the username or password is missing", () => {
  // should return a 400 status code to show there was a user error.
  // should return a json object that contains an error message.
  // should specify json as the content type in the http header.
  })
})


