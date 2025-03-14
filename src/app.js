const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"])

app.get('/', (request, response) => {
    response.send('Application up and running.')
})



app.listen(port, () => {
    console.log('your knex and Express is up and running')
})


app.get('/pets', (request, response) => {
    knex('pet')
    .select('*')
    .then(pets => {
        var petNames = pets.map(pet => pet.name)
        response.status(200).json(petNames);
    })
    .catch(err => {
        response.status(404).json({
          message: "The data that you are looking for could not be found. Please try again."
        });
      });
})