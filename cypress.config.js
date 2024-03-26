const { defineConfig } = require("cypress");
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          return {
            name: faker.person.firstName()
            + Math.floor(Math.random() * 5),
            password: 'Pa$$word123!'
          }
        }
      });
    },
  },
});
