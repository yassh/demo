'use strict'

function delaySay(delay, say) {
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      if (say === 'fuck') {
        reject(new Error('汚い言葉は言えません！'))
      } else {
        console.log(say)
        resolve()
      }
    }, delay)
  }))
}

delaySay(2000, '5')
  .then(() => delaySay(2000, '4'))
  .then(() => delaySay(2000, 'fuck'))
  .then(() => delaySay(2000, '2'))
  .then(() => delaySay(2000, '1'))
