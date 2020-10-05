const port = 8000;

//import express from 'express';
const express = require('express');
//import faker from 'faker';
const faker = require('faker');

const app = express();

app.use(express.json());

class User {
    constructor(){
        this.id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
};

class Company {
    constructor(){
        this.id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
};

app.get("/api/users/new", (req, res) => {
    const newUser = new User(req);
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company(req);
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = new User(req);
    const newCompany = new Company(req);
    res.json([newUser, newCompany]);
});

// app.get("/", (req, res) => {
//     res.send("Hello from express")
// });

app.listen(port, () => {
    console.log(`Listening on port ${port} for request to respond to.`)
});