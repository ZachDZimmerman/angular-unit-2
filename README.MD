# Unit 2

## A New Structure

What are possible issues with this new file structure?
* Forgetting script tags and making changes to index.html and the needed file structure changes

When thinking about extending the single responsibility principle to the app structure, what are some other ways that the app could be structured?
* All languages in their specific folders from the get go. Good practice!

What are the differences between serving files from an http server and from the file system? It seemed to work fine with just open index.html in the browser...
* Testing it as you would in production to work out kinks in deployment is monumental.

Reflecting on the new structure and thinking back to lesson 1 - is Angular an MVC framework? How does the app structure support/disprove that?
* Model View Controller!

## Digestive Cycle
What is the difference between $scope.apply and $scope.digest?
* The digest loop is what runs after the $apply function brings a callback into the angular context.
The digest loop has two sub-loops in it. One is the $watch list and the other is the $evalAsync

What is the digest cycle?
* Monitors what variables are getting changed that are being watched.

What is the scope life cycle? (this will require some additional reading)
* Creation, Watcher registration, Model mutation, Mutation observation and Scope destruction
  -https://docs.angularjs.org/guide/scope#scope-life-cycle

What does "bootstrapping an angular app" mean?
* Putting the angular script tag at the bottom of the html so it loads quicker than if at the tope where it could be blocked by the html. Another way or also do the ng-app the html.

## Dependency Injection

What is dependency injection?
* Dependency injection is a software design pattern that implements inversion of control for resolving dependencies. Dependency injection means giving an object its instance variables.

How does angular implement dependency injection?
*

What are the three ways to annotate our code with service names (dependencies)? Write three code examples with each one of these options.
*

## Custom Filters


## Routing


## Http Server

What is a service? Is there a Ruby or JavaScript equivalent to Angular services?
*
Explain in as much detail as possible what happens under the hood of $http.get()
*
What is $q and how does it relate to $http?
*
