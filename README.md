[Task description](./README_TASK.md)

# Cheap Flights test app

Flights searching application. Check out live build at [cheap-flights.magicznyleszek.xyz/dist](http://cheap-flights.magicznyleszek.xyz/dist).

Added npm packages:

- `chai`, `karma-chai`: missing dependencies for tests
- `eslint-config-ryanair`, `stylelint-config-ryanair`: wanted to use Ryanair's original configs
- `karma-sinon`, `sinon`: needed for spies in tests
- `angular-ui-router`: missing app dependency

Commands:

- `npm run start`: start local server [localhost:3000](http://localhost:3000)
- `npm run test`: run tests
- `npm run lint`: lint code

Notes:
- time spent on task: 34h
- given more time I would like to add Cypress e2e tests
- most of the code is tested
- initial task code wasn't building and required fixes in many places (probably part of the test?)
- I drew a plane illustration for loading and clouds for footer
- I wanted to do search results pagination, but the endpoint returns random data :(
- for design style I tried to mimic Ryanair's home page and also use https://www.behance.net/gallery/34224289/Ryanair-Design-Centre a bit.
