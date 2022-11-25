Coding Exercise
===============

Getting Started
---------------
* Install node.js version 6.9 or later
* `npm install`
* `npm start`
* In a separate terminal: `curl --header 'agency: octa' http://0.0.0.0:3000/`
curl --header 'agency: octa' http://0.0.0.0:3000/api/v2/tickets
* `npm test` (currently broken!)

This is a simple transit fare microservice. Our ticket-purchasing mobile apps use this microservice API. They expect a JSON response that lists the ticket types a rider can purchase from our app.

server.js: runs an Express server on localhost port 3000.

routes/app.js: routes requests to business logic modules

lib: business logic. For this exercise, there is just 'database.js' that simulates a connection to a real data store like Postgres or Mongo.

test: test cases

The current version of the API is a flat, unmodified representation of what comes from the database:
```
[
  { "id": 6, "duration": "1-hour", "rider": "Adult", "price": 1.50 },
  { "id": 7, "duration": "1-hour", "rider": "Youth", "price": 0.50 },
  { "id": 8, "duration": "1-hour", "rider": "Senior", "price": 0.60 },
  { "id": 9, "duration": "7-day", "rider": "Adult", "price": 5.00 }
]
```

However, we're rewriting our app and our app developers now prefer hierarchical data like:
```
[
  {
    "7-day": [
      { "Adult": 5.00 }
    ]
  },
  {
    "1-hour": [
      { "Adult": 1.50 },
      { "Youth": 0.50 },
      { "Senior": 0.60 }
    ]
  }
]
```

In other words:
```
[
  duration: [
    rider: price
  ],
  duration: [
    rider: price,
    rider: price,
    rider: price
  ]
]
```

Of course, riders will continue to use the existing version of our app, so this fare microservice will need to support both versions of the API. Unfortunately, we didn't version our API, so requests from the existing apps won't include any API version information.

Tasks:
* Fix existing tests
* Decide and implement a way to version API requests. The mobile developers are fine with anything reasonable: different routes, headers, etc.
* Add test for new version of the API
* Implement the new API in routes/app.js and/or lib

You can add additional npm modules if you need them.

The source code has a mix of styles. We are moving to ES6 in all of code. Bonus points for using ES6 features where appropriate and for cleaning up any lint, poor style, misspellings, noisy console debugging or refactoring smelly code.

Use the local git repository. Add your changes as git commits.

This should take you about 1-2 hours.

When you're done
----------------
Remove node_modules, zip up this directory and send it to us. Don't push it to Github!
