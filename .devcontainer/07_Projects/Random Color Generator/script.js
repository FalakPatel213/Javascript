const randomColor = function () {
    const code = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += code[Math.floor(Math.random() * 16)];
    }
    return color;
};
  
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
  
const intervalSet = function () {
    document.body.style.backgroundColor = randomColor();
};
  
let intervalId;
startBtn.addEventListener('click', function () {
    if (!intervalId) {
        intervalId = setInterval(intervalSet, 1000);
    }
});
  
stopBtn.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;
});
  