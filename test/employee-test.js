
import test from "ava"
import request from "supertest"
import app from "../app.js"


test("Get list of employees", async t => {
    const employeeToCreate = { name: "Martin Meier", age: 55 };
  
    const creation = await request(app)
      .post("/employee")
      .send(employeeToCreate);
  
    const res = await request(app).get("/employee/all");
  
    t.is(res.status, 200);
    t.true(Array.isArray(res.body), "is the body an array?");
    t.true(res.body.length > 0);
  });
  
  test("Add a new employee to the conference", async t => {
    t.plan(1);
    const employeeToCreate = { name: "Martin Meier", age: 55 };
  
    const res = await request(app)
      .post("/employee")
      .send(employeeToCreate);
  
    t.is(res.status, 200);
    t.is(res.body.name, employeeToCreate.name);
    t.is(res.body.age, employeeToCreate.age);
  });
  
  test("Fetch a person", async t => {
    t.plan(2);
    const employeeToCreate = { name: "Martin Meier", age: 55 };
  
    const myNewEmployeeCreated = (await request(app)
      .post("/employee")
      .send(employeeToCreate)).body;
  
    const fetchRes = await request(app).get(
      `/employee/${myNewEmployeeUserCreated._id}/json`
    );
  
    const myNewEmployeeFetched = fetchRes.body;
  
    t.is(fetchRes.status, 200);
    t.deepEqual(myNewEmployeeFetched, myNewEmployeeCreated);
  });
  
  test("Delete an employee", async t => {
    t.plan(3);
  
    const person = (await request(app)
      .post("/employee")
      .send({ name: "Martin Meier", age: 55 })).body;
  
    const del = await request(app).delete(`/employee/${employee._id}`);
  
    t.is(del.status, 200);
    t.is(del.text, "ok!");
  
    const fetch = await request(app).get(`/employee/${employee._id}/json`);
  
    t.is(fetch.status, 404);
  });
