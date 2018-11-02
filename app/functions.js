if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    argsAsArray: function (fn, arr) {
      return fn.apply(this, arr);
    },

    speak: function (fn, obj) {
      return fn.call(obj);
    },

    functionFunction: function (str) {
      return function (str2) {
        return str + ', ' + str2;
      };
    },

    makeClosures: function (arr, fn) {
      var closure = function (arr) {
        return function () {
          return fn.call(this, arr);
        };
      };

      return arr.map(function (arr) {
        return closure(arr);
      });
    },

    partial: function (fn, str1, str2) {
      return function (str3) {
        return fn.apply(this, [str1, str2, str3]);
      };
    },

    useArguments: function () {
      var args = Array.from(arguments);
      return args.reduce(function (sum, arg) {
        return sum + arg;
      }, 0);
    },

    callIt: function (fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(this, args);
    },

    partialUsingArguments: function (fn) {
      var slice = Array.prototype.slice,
        args = slice.call(arguments, 1);
      return function () {
        var finalArgs = args.concat(slice.call(arguments));
        return fn.apply(this, finalArgs);
      };
    },

    curryIt: function (fn) {
      function process(fn, i, args) {
        return function (val) {
          args.push(val);

          if (i === fn.length) {
            return fn.apply(this, args);
          }

          return process(fn, i + 1, args);
        };
      }

      if (fn.length === 0) {
        return fn;
      }

      var args = [];

      return process(fn, 1, args);
    }
  };
});
