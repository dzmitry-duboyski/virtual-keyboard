
import getControlKey from './getControlKey.js';
import getOtherKeyCode from './getOtherKeyCode.js';
import changeCaseKeyboard from './changeCaseKeyboard.js';
import state from './state.js';

export default function handlingEventKeyup(event){
  let el = document.getElementById(event.code);
  let currentValue = event.key;
  let currentCode = event.code;
  let language = localStorage.getItem("Lan");

  //Exception Handling
  if (
    !getControlKey.includes(currentValue) &&
    !getOtherKeyCode.includes(currentCode)
  ) {
    return;
  }

  document.getElementById(event.code).classList.remove("active");
  if (state.capsLock === true) {
    document.getElementById("CapsLock").classList.add("active");
  }

  if (event.key === "Shift") {
    state.shift = false;
    state.keyboardUP = !state.keyboardUP;
    changeCaseKeyboard();
  }
  if (event.key === "CapsLock") {
  }

  if (event.key === "Control") {
     state.control = false;
  }

  //switch language
  if (
    (event.key === "Control") && (state.shift === true) ||
    (event.key === "Shift") && (state.control === true)
  ) {

    if (language === "ru") {
      localStorage.setItem("Lan", "en");
      language = localStorage.getItem("Lan");
      return changeCaseKeyboard();
    }
    if (language === "en") {
      localStorage.setItem("Lan", "ru");
      language = localStorage.getItem("Lan");
      return changeCaseKeyboard();
    }
  }
};