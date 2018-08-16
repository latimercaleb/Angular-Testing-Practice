# Testing in Angular-6
Testing in Angular uses two types of tools commonly which are built into the CLI. **Jasmine** & **Karma** for automated testing
In Angular, Apps are built out of components(*UI*) & Services(*API*).
With Karma & Jasmine we can test the bits and pieces that make up these parts

## The Tools
Karma is a runner for tests, it handles the automation part.
Jasmine is a BDD testing framework, BDD focuses on behavior of the function so what the result should be like, given a certain input, it allows for AAA (Arrange, Act, Assert)

TDD or test driven development is a very big drive for automated testing in most fields automated testing is a greatly desired skill to catch defects before releasing software, where you follow a common build path:
- Write a test
- Write some code to meet and pass that test.
- Refactor

The goal of merging testing & development is that it should help a dev make better working software without introducing time consuming bugs.

## Testing Types:
In general there are 3 types:  
- Unit: Standalone testing in isolation without external resources. In Angular this is testing the component directly. No template, service, database or router. If a router or service is in play, you must generate a fake that is guaranteed to produce a certain result. Ideally you want to have at least one test per component function in the class. Easiest and should make up the bulk of a test suite
- Integration: Test a component with it's external resources, this means making sure that the template works, bindings are correct, and events propagate correctly. You must simulate the environment with routing, dependencies etc. Each service should be part of at least one integration test
- End to end(*e2e*): A full test of what the app should do in production, meaning that it is run fully and in a browser. Slowest and most cumbersome and very fragile since requirements can be adjusted regularly and should be few. e2e tests should match use cases of a user for things like creating an account, downloading a file, logging in and logging out, etc

## Testing fundamentals
> "Tests are first class citizens of code"

So all practices about clean coding all apply to writing tests. Some simple demands are:
- Functions don't exceed 10 lines
- Naming convention is standard
- Tests have a single a responsibility

Running the test suite is done from the cli with `ng test`, Tests are in `.spec.ts` files which are written in Jasmine and are run/watched by Karma
Karma is configured, but not coded, so reviewing the docs and tweaking the `karma.conf.js` file will change it's logging potential
Import to pull in the component and then using the AAA and `expect` handle the assertion
`describe` and `it` are the main building blocks of a test suite & test case respectively

Tests should not be fragile, sometimes this is impossible to avoid, but updating each test related to a component as that component changes is very important for consistency some tests reuse components, and will require re-set-up which you can use `beforeEach` and `afterEach` when one test affects the running of another test this is called a side-effect, tests should be independent so if side-effects are detected this is a sign of an issue

`ng test --code-coverage` (or `ng test -cc`) shows test coverage of code body (bugged in Angular-6)

Code coverage should be at 70% as a goal and is a metric for testing all parts of the application
