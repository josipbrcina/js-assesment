if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      return {};
    },

    functions : function(flag) {
      return flag ? 'a' : 'b';
    },

    parseInt : function(num) {
      return parseFloat(num);
    },

    identity : function(val1, val2) {
      return val1 === val2;
    }
  };
});
