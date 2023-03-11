# CLUB MANAGER ⚽️ 🥅 🏟️

Manage your favorite club, make transfers, match squads and win championships.

This is a `Node` + `React` + `TypeScript` project.

1. [FIRST STEPS](#first-steps)
3. [DATABASE](#database)
3. [AUTOMATED TESTS](#automated-tests)
4. [FOLDER STRUCTURE](#folder-structure)

## FIRST STEPS

Clone the repository and create `.env` and `development.ts` files:

```bash
cp .env.example .env
cp src/config/development.example.ts src/config/development.ts

# Get the secrets on Heroku environment
```

Install packages, enable ORM and run:
```bash
yarn && yarn prisma generate && yarn dev
```

Run automated tests ([see more in automated tests section](#automated-tests)):
```bash
yarn test             # run all tests
yarn test:mocked      # run just mocked tests
yarn test:non-mocked  # run just non-mocked tests
```

## DATABASE

For development we're currently using the postgres14 docker image on infra-le-local-dev and both test and prod versions on Heroku are 1.5.

### ORM

We use Prisma as our database ORM, they have good documentation [here](https://www.prisma.io/)
Whenever a prisma command is invoked, the CLI typically reads some information from the schema file, e.g.

So run `yarn prisma generate`: Reads all information from the Prisma schema to generate the correct data source client code (e.g. Prisma Client).
```bash
yarn prisma generate
```

And run `yarn prisma migrate dev`: Reads the data sources and data model definition to create a new migration.
```bash
yarn prisma migrate dev <migration_name> // name with snake case pattern
```

See all Prisma options running:
```bash
yarn prisma
```

> Remember to run `yarn prisma format` every time you change `schema.prisma` before committing your changes

## AUTOMATED TESTS

We need two layers of `(with jest)` tests to validate our service:

- **mocked tests**:
using `jest.spyOn().mockImplementation()` we can simulate the response for HTTP or SQL scripts and with that we can validate if the internal flow is correct like, for example, `expect(someFunction).toCalledTimes(1)`.

> this test will be run for every `pre-push` git hook.

- **non-mocked tests**:
these tests need to be run without mocks, fixtures or anything else. In this scenario, the tests make HTTP requests and save the data to our spec database. We need to ensure that everything will be fine in a real scenario.

> these tests will run on Circle CI for every open PR.

So for that we need a folder called `__tests__` for each folder in `src/server`:

```ts
src
  |-> helpers
            |-> tests
                    |-> mocked
                    |-> non-mocked
```

and the setup, fixtures, mocks... needs to be in:

```ts
src
  |-> tests-setup
                |-> mocks
                |-> fixtures
                |-> jest.setup.ts
```

## FOLDER STRUCTURE

Inside `src/server`, please follow these rules:
```ts
src
  |-> api          // handle HTTP requests and responses
  |-> config       // handle environment variables
  |-> context      // handle business logic (should not know about HTTP requests or responses and should not talk to any external systems directly)
  |-> helpers      // handle specific functions for business logic
  |-> infra        // handle the connection with another libraries
  |-> middleware   // handle in the HTTP layer with things like cors...
  |-> repository   // handle wrapped Prisma functions and SQL scripts
  |-> services     // handle the communication with other APIs
  |-> tests-setup  // handle test configurations and fixtures, mocks...
  |-> types        // handle our interfaces for this project
  |-> utils        // handle generic functions
```
