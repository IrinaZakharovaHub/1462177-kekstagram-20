'use strict';
(function () {
  // var imgFilter = document.querySelector('.img-filters');
  // var onError = function (message) {
  //   console.log(message));
  // };

  // var onSuccess = function (data) {
  //   console.log(data);
  // };
  window.load('https://javascript.pages.academy/kekstagram/data', function (data) {
    window.picture(data);
    // imgFilter.classList.remove('img-filters--inactive');
    window.preview(data);
  }, function (r) {});
})();
