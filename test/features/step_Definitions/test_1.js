const { Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const pactum = require('pactum');
const assert = require('assert').strict;

let apiEndpoint;
let response;

Given('I am in the homepage of DevOps Stack', async function () {
  apiEndpoint = 'http://localhost:8081';
  response = await axios.get(apiEndpoint);
});

Then('I am going in the page about', async function () {
    apiEndpoint = 'http://localhost:8081/about';
    response = await axios.get(apiEndpoint);
});

Then('I print the result in JSON format', async function () {
    console.log(response);
})
