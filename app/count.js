if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    count: function (start, end) {
      var timeout;

      function count() {
        console.log(start++);

        if (start <= end) {
          timeout = setTimeout(count, 100);
        }
      }

      count();

      return {
        cancel: function () {
          return timeout && clearTimeout(timeout);
        }
      };
    }
  };
});
