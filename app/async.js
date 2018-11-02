if (typeof define !== 'function') {
  var define = require('amdefine')(module);
  var Promise = require('promise');
}

define(['jquery'], function ($) {
  return {
    async: function (value) {
      return new Promise(function (resolve) {
        resolve(value);
      });
    },

    manipulateRemoteData: function (url) {
      return new Promise(function (resolve) {
        $.when($.ajax({
          url: 'http://localhost:4444' + url,
          success: function (result) {
            return result;
          }
        })).then(function (result) {
          resolve(result.people.map(function (item) {
            return item.name;
          }).sort());
        });
      });
    }
  };
});
