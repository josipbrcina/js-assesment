if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      obj.sayIt = fn;

      return obj.sayIt();
    },

    // TODO: Fix alterObjects
    alterObjects : function(constructor, greeting) {
    },

    iterate : function(obj) {
      var output = [];
      for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
          output[output.length] = property + ': ' + obj[property];
        }
      }

      return output;
    }
  };
});
