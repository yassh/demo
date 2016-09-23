'use strict';

function delaySay(delay, say) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (say === 'fuck') {
        reject(new Error('汚い言葉は言えません！'));
      } else {
        console.log(say);
        resolve();
      }
    }, delay);
  });
}

delaySay(2000, '5').then(function () {
  return delaySay(2000, '4');
}).then(function () {
  return delaySay(2000, 'fuck');
}).then(function () {
  return delaySay(2000, '2');
}).then(function () {
  return delaySay(2000, '1');
});