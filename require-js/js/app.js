
// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
requirejs.config({
    "baseUrl": "js/vendor",
    "paths": {
      "app": "../app"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);


requirejs(['libs-for-test/my-lib'], function(myLib) {
    console.log(myLib());
});