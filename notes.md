# Testing in Angular-6
Testing in Angular uses two types of tools commonly which are built into the CLI. **Jasmine** & **Karma** for automated testing
In Angular, Apps are built out of components(*UI*) & Services(*API*).
With Karma & Jasmine we can test the bits and pieces that make up these parts

## The Tools
Karma is a runner for tests, it handles the automation part.
Jasmine is testing framework, it allows for AAA (Arrange,Act,Assert)

TDD or test driven development is a very big drive for automated testing in most fields automated testing is a greatly desired skill to catch defects before releasing software, where you write a test, and then write some code to meet and pass that test.

Testing should help a dev make better working software without introducing time consuming bugs.

Testing Types:
In general there are 3 types Unit, Integration and End to end.

Unit: Standalone, testing in isolation without external resources. In Angular this is testing the component directly. No template, service, database or router. If a router or service is dependant, you must generate a fake that is guaranteed to produce a certain result. Ideally you want to have at least one test per component function in the class. Easiest and should be in abundance in terms of testing

Integrate: Test a component with it's external resources, this means making sure that the template works, bindings are correct, and events propogate correctly. You must simulate the environment with routing, dependancies etc. Should be your second type. Each

End to end: Or e2e is a full test of what the app should do in production, meaning that it is run fully and simulates the full app. Slowest and most cumbersome and very fragile and should be very few and far in between.

"Tests are first class citizens" of a codebase, so all practices about clean and maintenable code all apply to testing. Clean code demands that:
- Functions don't exceed 10 lines
- Naming convention is standard
- Tests have a single a responsibility just like functions

Running the test suite is done from the cli with ng test, anything with a .spec.ts file gets ran and watched by Karma.
Karma is configured, but not coded, so reviewing the docs and tweaking the karma.conf.js file will change it's logging experience

In Jasmine, using imports to pull in the component and then using expect, describe and it are the main ways to set up a suite and spec set.

Jasmine is a BDD type of framework and BDD is a very popular way of doing TDD.
BDD focuses on behavior of the function so what the result should be like, given a certain input.

Tests should not be fragile, sometimes this is impossible to avoid, but updating each test related to a component as that component changes is very important for good practice.

Some tests reuse components, and will require re-set-up which you can use beforeEach and afterEach for in Jasmine

Side-effect: When one test affects the running of another test

Limitations of unit testing are:
- Routing - Template bindings -Services

For these Angular environement will need to be simulated

ng test --code-coverage (or ng test -cc) shows test coverage of code body (bugged in Angular-6)

Code coverage should be at 70% as a goal and is a metric for testing all parts of the application

Next it's time to deep dive into testing components with more advanced approaches