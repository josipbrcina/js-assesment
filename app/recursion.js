if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    listFiles: function (data, dirName) {
      var directories = [],
        filesArray = [];

      function loopDirectory(dir) {
        var i,
          files = dir.files;

        directories.push(dir.dir);

        for (i = 0; i < files.length; i++) {
          if (typeof files[i] === 'string') {
            if (directories.indexOf(dirName) > -1 || !dirName) {
              filesArray.push(files[i]);
            }
          } else {
            loopDirectory(files[i]);
          }
        }

        directories.pop();
      }

      loopDirectory(data);

      return filesArray;
    },

    permute: function (arr) {
      var result = [];

      function swapPosition(arr, pos1, pos2) {
        var temp = arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = temp;
      }

      function getPermutation(arr, startPos, endPos) {
        if (startPos === endPos) {
          result.push(arr.slice());
          return;
        }
        var i;
        for (i = startPos; i <= endPos; i++) {
          swapPosition(arr, startPos, i);
          getPermutation(arr, startPos + 1, endPos);
          swapPosition(arr, i, startPos);
        }
      }

      getPermutation(arr, 0, arr.length - 1);

      return result;
    }
  };
});
