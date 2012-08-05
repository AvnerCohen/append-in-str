//runspecs.js
var JQuery = function(){};
global.jQuery = global.$ = new JQuery();
global.jQuery.fn  = JQuery.prototype;


//Test framework
var jasmine = require('jasmine-node');
for (var key in jasmine) {
    global[key] = jasmine[key];
}

//What we're testing
require("../append-in-str.1.0.js")




jasmine.executeSpecsInFolder(__dirname + '/specs', function(runner, log) {
    process.exit(runner.results().failedCount ? 1 : 0);
}, true, true);
