/*import test from "ava";
import request from "supertest";
import app from "../conference-meetup-clone/app";

test("Get list of conferences", async t => {
  const conferenceToCreate = {
    name: "Testing meeting",
    location: " bla bla AG",
    employees: []
  };

  const creation = await request(app)
    .post("/conference")
    .send(conferenceToCreate);

  const res = await request(app).get("/conference/all");

  t.is(res.status, 200);
  t.true(Array.isArray(res.body), "Body should be an array");
  t.true(res.body.length > 0);
});

test("Create new conference", async t => {
  t.plan(4);
  const conferenceToCreate = {
    name: "Testing  meeting",
    location: "bla bla AG",
    employees: []
  };

  const res = await request(app)
    .post("/conference")
    .send(conferenceToCreate);

  t.is(res.status, 200);
  t.is(res.body.name, conferenceToCreate.name);
  t.is(res.body.location, conferenceToCreate.location);
  t.deepEqual(res.body.employees, conferenceToCreate.attendees);
});

test("Fetch a conference", async t => {
  t.plan(2);
  const conferenceToCreate = {
    name: "Testing ",
    location: "bla bla AG",
    attendees: []
  };

  const conferenceCreated = (await request(app)
    .post("/conference")
    .send(conferenceToCreate)).body;

  const fetchRes = await request(app).get(`/meetup/${conferenceCreated._id}/json`);

  const conferenceFetched = fetchRes.body;

  t.is(fetchRes.status, 200);
  t.deepEqual(conferenceFetched, conferenceCreated);
});

test("Delete a conference", async t => {
  t.plan(3);

  const conferenceToCreate = {
    name: "Testing ",
    location: "bla bla",
    employees: []
  };

  const conference = (await request(app)
    .post("/conference")
    .send(meetupToCreate)).body;

  const del = await request(app).delete(`/conference/${conference._id}`);

  t.is(del.status, 200);
  t.is(del.text, "ok!");

  const fetch = await request(app).get(`/conference/${conference._id}/json`);

  t.is(fetch.status, 404);
});

test('User can attend to a meetup', async t => {
  const annaUser = { name: 'Maria', age: 29 };

  const conference = { name: 'meeting',
  location: 'company meeting room',
  employees: []};

  const createdPerson = (await request(app)
  .post("/person")
  .send(annaUser)).body

  const meetupCreateRes = await request(app)
  .post("/meetup")
  .send(meetupWTM)

  const createdMeetup = meetupCreateRes.body

  const addAttendeeRes = await request(app)
  .post(`/meetup/${createdMeetup._id}/addAttendee`)
  .send( {personId : createdPerson._id} )

  t.is(addAttendeeRes.status, 200)

  const meetupAltered = addAttendeeRes.body

  t.is(meetupAltered.attendees[0]._id, createdPerson._id)

  t.deepEqual(meetupAltered.attendees[0], createdPerson)

  t.notDeepEqual(meetupAltered, createdMeetup)
})*/