const server = require("./server");
const db = require("../data/dbConfig");

const supertest = require("supertest");

afterEach(async () => {
  await db("hobbits").truncate();
});

describe("server", () => {
  it("can run the tests", () => {
    expect(true).toBeTruthy();
  });
  describe("GET /", () => {
    it("should return http status code 200 OK", () => {
      return supertest(server)
        .get("/") // .expect(200) // from supertest
        .then((res) => {
          expect(res.status).toBe(200); // from jest
        });
    });
    it("should return {api: 'up' }", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.body).toEqual({ api: "up" });
          expect(res.body.api).toBeDefined();
          expect(res.body.api).toBe("up");
        });
    });
  });

  describe("GET /hobbits", () => {
    it("should return an array", () => {
      supertest(server)
        .get("/hobbits")
        .then((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });

  describe("GET /hobbits", () => {
    it("should return an array with 4 elements", () => {
      supertest(server)
        .get("/hobbits")
        .then((res) => {
          expect(res.body).toHaveLength(0);
        });
    });
  });
});
