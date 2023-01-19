
const    startBtn = document.querySelector('button[data-start]');
const    stopBtn = document.querySelector('button[data-stop]');
  
  
  const timeDelay = 1000;
  let timerId = null;
  stopBtn.disabled = true;
  
  startBtn.addEventListener('click', handleStartBtnClick);
  stopBtn.addEventListener('click', handleStopBtnClick);
  
  function handleStartBtnClick(event) {
    timeDelayChangeBgColor();
    disabledBtnStatusOnStartBtnClick(event);
  }
  
  function handleStopBtnClick(event) {
    clearInterval(timerId);
    disabledBtnStatusOnStopBtnClick(event);
  }
  
  function disabledBtnStatusOnStartBtnClick(event) {
    event.target.disabled = true;
    stopBtn.disabled = false;
  }
  function disabledBtnStatusOnStopBtnClick(event) {
    event.target.disabled = true;
    startBtn.disabled = false;
  }
  
  function timeDelayChangeBgColor() {
    timerId = setInterval(changeBgColor, timeDelay);
  }
  
  function changeBgColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }