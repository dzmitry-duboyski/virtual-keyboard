import getControlKey from './getControlKey.js';
import getOtherKeyCode from './getOtherKeyCode.js';
import changeCaseKeyboard from './changeCaseKeyboard.js';
import state from './state.js';

var value = [];

export default function handlingEventKeydown(event){
  const el = document.getElementById(event.code);
  const currentValue = event.key;
  const currentCode = event.code;
  let language = localStorage.getItem("Lan");

  //Exception Handling
  if (!getControlKey.includes(currentValue) && !getOtherKeyCode.includes(currentCode))
    return;

  //event for control buttons
  if (getControlKey.includes(currentValue)) {
    if (currentValue === " ") {
      value.push(" ");
    }
    if (currentValue === "Backspace") {
      value.pop();
    }
    if (currentValue === "Enter") {
      value.push("\n");
    }
    if (currentValue === "ArrowUp") {
      value.push("↑");
    }
    if (currentValue === "ArrowDown") {
      value.push("↓");
    }
    if (currentValue === "ArrowLeft") {
      value.push("←");
    }
    if (currentValue === "ArrowRight") {
      value.push("→");
    }

    if (event.key === "Shift") {
      if (event.repeat === true) {
        return;
      }
      state.shift = true;
      state.keyboardUP = !state.keyboardUP;
      changeCaseKeyboard();
    }
    if (event.key === "CapsLock") {
      if (event.repeat === true) {
        return;
      }
      if (state.capsLock === false) {
        state.capsLock = true;
        state.keyboardUP = !state.keyboardUP;
        changeCaseKeyboard();
      } else {
        state.capsLock = false;
        state.keyboardUP = !state.keyboardUP;
        changeCaseKeyboard();
      }
    }
    if (event.key === "Control") {
      state.control = true;
    }
    //output in TextArea
    document.querySelector(".textarea__textarea").value = value.join("");
  }

  //pull out the text from the button using the selector
  if (getOtherKeyCode.includes(currentCode)) {
    let currentCase;
    if (state.keyboardUP) {
      currentCase = "caseUp";
    }
    if (!state.keyboardUP) {
      currentCase = "caseDown";
    }

    const buttonActive = document.getElementById(`${currentCode}`);
    const buttonText = buttonActive.querySelector(
      `.${language} > span.${currentCase}`
    ).innerText;

    value.push(buttonText);
    document.querySelector(".textarea__textarea").value = value.join("");
  }

  el.classList.add("active");
};