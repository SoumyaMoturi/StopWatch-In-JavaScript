let [ms, s, m, h] = [0, 0, 0, 0];
let timer = document.getElementById('time');
let time = null;

timer.innerHTML = '00 : 00 : 00 : 000';
document.getElementById('start').addEventListener('click', () => {
  let btn1 = document.getElementById('start');
  if (btn1.innerHTML === 'Pause') {
    btn1.innerHTML = 'Resume';
    clearInterval(time);
    showTime();
  } else if (btn1.innerHTML === 'Start' || btn1.innerHTML === 'Resume') {
    time = setInterval(showTime, 25);
    btn1.innerHTML = 'Pause';
  }
});
document.getElementById('stop').addEventListener('click', () => {
  clearInterval(time);
  timer.innerHTML = '00 : 00 : 00 : 000';
  document.getElementById('start').innerHTML = 'Start';
});

function showTime() {
  ms += 25;
  if (ms === 1000) {
    ms = 0;
    s++;
    if (s === 60) {
      s = 0;
      m++;
      if (m == 60) {
        m = 0;
        h++;
      }
    }
  }
  let hr = h < 10 ? '0' + h : h;
  let min = m < 10 ? '0' + m : m;
  let sec = s < 10 ? '0' + s : s;
  let milli_sec = ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms;

  timer.innerHTML = '' + hr + ' : ' + min + ' : ' + sec + ' : ' + milli_sec;
}
