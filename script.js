import getMainContent from './js/getMainContent.js';
import getControlKey from './js/getControlKey.js';
import getOtherKeyCode from './js/getOtherKeyCode.js';

let language = localStorage.getItem("Lan");
if (language === null) {
  localStorage.setItem("Lan", "en");
  language = localStorage.getItem("Lan");
}
let capsLock = false;
let shift = false;
let control = false;
let keyboardUP = false;
let value = [];

let displayApp = function (getMainContent) {
  document.querySelector("body").insertAdjacentHTML("afterbegin", getMainContent);
};

let changeCaseKeyboard = () => {
  if (language === "ru") {
    //display current language
    document.querySelectorAll(".keyboard-button > span.en").forEach((el) => {
      el.classList.add("hidden");
    });
    document.querySelectorAll(".keyboard-button > span.ru").forEach((el) => {
      el.classList.remove("hidden");
    });

    if (keyboardUP === false) {
      document.querySelectorAll("span.ru span.caseUp").forEach((el) => {
        el.classList.add("hidden");
      });
      document.querySelectorAll("span.ru span.caseDown").forEach((el) => {
        el.classList.remove("hidden");
      });
    }
    if (keyboardUP === true) {
      document.querySelectorAll("span.ru span.caseUp").forEach((el) => {
        el.classList.remove("hidden");
      });
      document.querySelectorAll("span.ru span.caseDown").forEach((el) => {
        el.classList.add("hidden");
      });
    }
  }

  if (language === "en") {
    document.querySelectorAll(".keyboard-button > span.ru").forEach((el) => {
      el.classList.add("hidden");
    });
    document.querySelectorAll(".keyboard-button > span.en").forEach((el) => {
      el.classList.remove("hidden");
    });

    if (keyboardUP === false) {
      document.querySelectorAll("span.en span.caseUp").forEach((el) => {
        el.classList.add("hidden");
      });
      document.querySelectorAll("span.en span.caseDown").forEach((el) => {
        el.classList.remove("hidden");
      });
    }
    if (keyboardUP === true) {
      document.querySelectorAll("span.en span.caseUp").forEach((el) => {
        el.classList.remove("hidden");
      });
      document.querySelectorAll("span.en span.caseDown").forEach((el) => {
        el.classList.add("hidden");
      });
    }
  }
};

//pressing a button
const handlingEventKeydown = (event) => {
  let el = document.getElementById(event.code);
  let currentValue = event.key;
  let currentCode = event.code;

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
      shift = true;
      keyboardUP = !keyboardUP;
      changeCaseKeyboard();
    }
    if (event.key === "CapsLock") {
      if (event.repeat === true) {
        return;
      }
      if (capsLock === false) {
        capsLock = true;
        keyboardUP = !keyboardUP;
        changeCaseKeyboard();
      } else {
        capsLock = false;
        keyboardUP = !keyboardUP;
        changeCaseKeyboard();
      }
    }
    if (event.key === "Control") {
      control = true;
    }
    //output in TextArea
    document.querySelector(".textarea__textarea").value = value.join("");
  }

  //pull out the text from the button using the selector
  if (getOtherKeyCode.includes(currentCode)) {
    let currentCase;
    if (keyboardUP) {
      currentCase = "caseUp";
    }
    if (!keyboardUP) {
      currentCase = "caseDown";
    }

    let buttonActive = document.getElementById(`${currentCode}`);
    let buttonText = buttonActive.querySelector(
      `.${language} > span.${currentCase}`
    ).innerText;

    value.push(buttonText);
    document.querySelector(".textarea__textarea").value = value.join("");
  }

  el.classList.add("active");
};

//keyboard click event
const handlingEventKeyup = (event) => {
  let el = document.getElementById(event.code);
  let currentValue = event.key;
  let currentCode = event.code;

  //Exception Handling
  if (
    !getControlKey.includes(currentValue) &&
    !getOtherKeyCode.includes(currentCode)
  ) {
    return;
  }

  document.getElementById(event.code).classList.remove("active");
  if (capsLock === true) {
    document.getElementById("CapsLock").classList.add("active");
  }

  if (event.key === "Shift") {
    shift = false;
    keyboardUP = !keyboardUP;
    changeCaseKeyboard();
  }
  if (event.key === "CapsLock") {
  }

  if (event.key === "Control") {
    control = false;
  }

  //switch language
  if (
    (event.key === "Control") & (shift === true) ||
    (event.key === "Shift") & (control === true)
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

//keyboard display
displayApp(getMainContent());

//display modified keyboard
changeCaseKeyboard();

document.addEventListener("keydown", handlingEventKeydown);
document.addEventListener("keyup", handlingEventKeyup);