if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(str2) {
        return str + ', ' + str2;
      };
    },

    makeClosures : function(arr, fn) {
      var closure = function (arr) {
        return function () {
            return fn.call(this, arr);
          };
      };

      return arr.map(function(arr) {
        return closure(arr);
      });
    },

    partial : function(fn, str1, str2) {
      return function (str3) {
        return fn.apply(this, [str1, str2, str3]);
      };
    },

    useArguments : function() {
      var args = Array.from(arguments);
      return args.reduce(function(sum, arg) {
        return sum + arg;
      }, 0);
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {
      var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);
      return function () {
        var new_args = slice.call(arguments),
          args = stored_args.concat(new_args);
        return fn.apply(null, args);
      };
    },

    curryIt : function(fn) {

    }
  };
});
