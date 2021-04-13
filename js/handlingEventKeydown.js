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
    switch(currentValue){
      case " ":
        value.push(" ");
        break;
      case "Backspace":
        value.pop();
        break;
      case "Enter":
        value.push("\n");
        break;
      case "ArrowUp":
        value.push("↑");
        break;
      case "ArrowDown":
        value.push("↓");
        break;
      case "ArrowLeft":
        value.push("←");
        break;
      case "ArrowRight":
        value.push("→");
        break;
      case "":
        value.push("→");
        break;
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