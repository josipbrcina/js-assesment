if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    indexOf: function (arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }

      return -1;
    },

    sum: function (arr) {
      var i,
        sum = 0;
      for (i = 0; i <= arr.length; i++) {
        sum += i;
      }

      return sum;
    },

    remove: function (arr, item) {
      var i,
        output = [];
      for (i = 0; i < arr.length; i++) {
        if (arr[i] !== item) {
          output[output.length] = arr[i];
        }
      }

      return output;
    },

    removeWithoutCopy: function (arr, item) {
      var i,
        len;

      for (i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i--;
          len--;
        }
      }

      return arr;
    },

    append: function (arr, item) {
      arr[arr.length] = item;

      return arr;
    },

    truncate: function (arr) {
      var i,
        output = [];
      for (i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) {
          output[i] = arr[i];
        }
      }

      return output;
    },

    prepend: function (arr, item) {
      var i,
        output = [item];
      for (i = 0; i < arr.length; i++) {
        output[i + 1] = arr[i + 1];
      }

      return output;
    },

    curtail: function (arr) {
      var i,
        output = [];
      for (i = 1; i < arr.length; i++) {
        output[i - 1] = arr[i];
      }

      return output;
    },

    concat: function (arr1, arr2) {
      var i,
        output = arr1;
      for (i = 0; i < arr2.length; i++) {
        output[output.length] = arr2[i];
      }

      return output;
    },

    insert: function (arr, item, index) {
      var i,
        output = [];
      for (i = 0; i < arr.length; i++) {
        if (i !== index) {
          output[output.length] = arr[i];
        } else {
          output[output.length] = item;
          output[output.length] = arr[i];
        }
      }

      return output;
    },

    count: function (arr, item) {
      var i,
        counter = 0;
      for (i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          counter++;
        }
      }

      return counter;
    },

    duplicates: function (arr) {
      var i,
        output = [],
        obj = {
          single: {},
          duplicates: {}
        };

      for (i = 0; i < arr.length; i++) {
        if (obj.single[arr[i]] !== true) {
          obj.single[arr[i]] = true;
        } else {
          obj.duplicates[arr[i]] = true;
        }
      }

      for (i in obj.duplicates) {
        output[output.length] = i;
      }

      return output;
    },

    square: function (arr) {
      var i,
        output = [];
      for (i = 0; i < arr.length; i++) {
        output[output.length] = (i + 1) * arr[i];
      }

      return output;
    },

    findAllOccurrences: function (arr, target) {
      var i,
        output = [];

      for (i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          output[output.length] = i;
        }
      }

      return output;
    }
  };
});
