export function countDown(time) {
  if(!time) {
    return
  }
  let time = formatTime(time)
  let interval = setInterval(timeCount, 1000)
  function timeCount() {
    if (time.sec < 1 && time.min >) {
      time.sec = 59
      time.min --
    }
  }
}

function formatTime(time) {
  let hour = time / 60 | 0
  let min = time - hour * 60

  return {
    hour: hour,
    min: min,
    sec: 0
  }
}

export const CountDown = {}

CountDown.prototype = {
  formatTime: function() {

  }
  init: function() {

  }
  padZero: function() {

  }
  destroy: function() {

  }
}
