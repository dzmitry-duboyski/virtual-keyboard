let mainContent = ` <div class="container">
<div class="textarea">
   <textarea  class="textarea__textarea" name="" id="textarea" cols="30" rows="10" placeholder="Hacking time..." disabled></textarea>
 </div>
 <div class="keyboard">
   <div class="keyboard-row">
     <div class="keyboard-button" id="Backquote">
       <span class="en">
         <span class="caseUp hidden">~</span>
         <span class="caseDown">&#8216;</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Ё</span>
         <span class="caseDown">ё</span>
       </span>
     </div>
     <div class="keyboard-button" id="Digit1">
       <span class="en">
         <span class="caseUp hidden">!</span>
         <span class="caseDown">1</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">!</span>
         <span class="caseDown">1</span>
       </span>
     </div>
     <div class="keyboard-button" id="Digit2">
       <span class="en">
         <span class="caseUp hidden">@</span>
         <span class="caseDown">2</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">"</span>
         <span class="caseDown">2</span>
       </span>
     </div>
     <div class="keyboard-button" id="Digit3">
       <span class="en">
         <span class="caseUp hidden">#</span>
         <span class="caseDown">3</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">№</span>
         <span class="caseDown">3</span>
       </span>
     </div>
     <div class="keyboard-button" id="Digit4">
       <span class="en">
         <span class="caseUp hidden">$</span>
         <span class="caseDown">4</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">;</span>
         <span class="caseDown">4</span>
       </span>
     </div>
     <div class="keyboard-button" id="Digit5">
       <span class="en">
         <span class="caseUp hidden">%</span>
         <span class="caseDown">5</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">%</span>
         <span class="caseDown">5</span>
       </span>
     </div>
     <div class="keyboard-button" id="Digit6">
       <span class="en">
         <span class="caseUp hidden">^</span>
         <span class="caseDown">6</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">:</span>
         <span class="caseDown">6</span>
       </span>
     </div>
     <div class="keyboard-button" id="Digit7">
       <span class="en">
         <span class="caseUp hidden">&</span>
         <span class="caseDown">7</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">?</span>
         <span class="caseDown">7</span>
       </span>
     </div>
     <div class="keyboard-button" id="Digit8">
       <span class="en">
         <span class="caseUp hidden">*</span>
         <span class="caseDown">8</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">*</span>
         <span class="caseDown">8</span>
       </span>
     </div>
     <div class="keyboard-button" id="Digit9">
       <span class="en">
         <span class="caseUp hidden">(</span>
         <span class="caseDown">9</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">(</span>
         <span class="caseDown">9</span>
       </span>
     </div>
     <div class="keyboard-button" id="Digit0">
       <span class="en">
         <span class="caseUp hidden">)</span>
         <span class="caseDown">0</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">)</span>
         <span class="caseDown">0</span>
       </span>
     </div>
     <div class="keyboard-button" id="Minus">
       <span class="en">
         <span class="caseUp hidden">_</span>
         <span class="caseDown">-</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">_</span>
         <span class="caseDown">-</span>
       </span>
     </div>
     <div class="keyboard-button" id="Equal">
       <span class="en">
         <span class="caseUp hidden">+</span>
         <span class="caseDown">=</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">+</span>
         <span class="caseDown">=</span>
       </span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="Backspace">
       <span class="">&#8592; Backspace</span>
     </div>
   </div>
   <div class="keyboard-row">
     <div class="keyboard-button keyboard-button_button-type_control" id="Tab">
         <span class="">Tab</span>
     </div>
     <div class="keyboard-button" id="KeyQ">
       <span class="en">
         <span class="caseUp hidden">Q</span>
         <span class="caseDown">q</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Й</span>
         <span class="caseDown">й</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyW">
       <span class="en">
         <span class="caseUp hidden">W</span>
         <span class="caseDown">w</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Ц</span>
         <span class="caseDown">ц</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyE">
       <span class="en">
         <span class="caseUp hidden">E</span>
         <span class="caseDown">e</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">У</span>
         <span class="caseDown">у</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyR">
       <span class="en">
         <span class="caseUp hidden">R</span>
         <span class="caseDown">r</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">К</span>
         <span class="caseDown">к</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyT">
       <span class="en">
         <span class="caseUp hidden">T</span>
         <span class="caseDown">t</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Е</span>
         <span class="caseDown">е</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyY">
       <span class="en">
         <span class="caseUp hidden">Y</span>
         <span class="caseDown">y</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Н</span>
         <span class="caseDown">н</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyU">
       <span class="en">
         <span class="caseUp hidden">U</span>
         <span class="caseDown">u</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Г</span>
         <span class="caseDown">г</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyI">
       <span class="en">
         <span class="caseUp hidden">I</span>
         <span class="caseDown">i</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Ш</span>
         <span class="caseDown">ш</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyO">
       <span class="en">
         <span class="caseUp hidden">O</span>
         <span class="caseDown">o</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Щ</span>
         <span class="caseDown">щ</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyP">
       <span class="en">
         <span class="caseUp hidden">P</span>
         <span class="caseDown">p</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">З</span>
         <span class="caseDown">з</span>
       </span>
     </div>
     <div class="keyboard-button" id="BracketLeft">
       <span class="en">
         <span class="caseUp hidden">{</span>
         <span class="caseDown">[</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Х</span>
         <span class="caseDown">х</span>
       </span>
     </div>
     <div class="keyboard-button" id="BracketRight">
       <span class="en">
         <span class="caseUp hidden">}</span>
         <span class="caseDown">]</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Ъ</span>
         <span class="caseDown">ъ</span>
       </span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="Delete">
       <span class="">Delete</span>
     </div>
   </div>
   <div class="keyboard-row">
     <div class="keyboard-button keyboard-button_button-type_control" id="CapsLock">
       <span class="">CapsLock</span>
     </div>
     <div class="keyboard-button" id="KeyA">
       <span class="en">
         <span class="caseUp hidden">A</span>
         <span class="caseDown">a</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Ф</span>
         <span class="caseDown">ф</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyS">
       <span class="en">
         <span class="caseUp hidden">S</span>
         <span class="caseDown">s</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Ы</span>
         <span class="caseDown">ы</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyD">
       <span class="en">
         <span class="caseUp hidden">D</span>
         <span class="caseDown">d</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">В</span>
         <span class="caseDown">в</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyF">
       <span class="en">
         <span class="caseUp hidden">F</span>
         <span class="caseDown">f</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">А</span>
         <span class="caseDown">а</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyG">
       <span class="en">
         <span class="caseUp hidden">G</span>
         <span class="caseDown">g</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">П</span>
         <span class="caseDown">п</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyH">
       <span class="en">
         <span class="caseUp hidden">H</span>
         <span class="caseDown">h</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Р</span>
         <span class="caseDown">р</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyJ">
       <span class="en">
         <span class="caseUp hidden">J</span>
         <span class="caseDown">j</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">О</span>
         <span class="caseDown">о</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyK">
       <span class="en">
         <span class="caseUp hidden">K</span>
         <span class="caseDown">k</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Л</span>
         <span class="caseDown">л</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyL">
       <span class="en">
         <span class="caseUp hidden">L</span>
         <span class="caseDown">l</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Д</span>
         <span class="caseDown">д</span>
       </span>
     </div>
     <div class="keyboard-button" id="Semicolon">
       <span class="en">
         <span class="caseUp hidden">:</span>
         <span class="caseDown">;</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Ж</span>
         <span class="caseDown">ж</span>
       </span>
     </div>
     <div class="keyboard-button" id="Quote">
       <span class="en">
         <span class="caseUp hidden">"</span>
         <span class="caseDown">'</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Э</span>
         <span class="caseDown">э</span>
       </span>
     </div>
     <div class="keyboard-button" id="Backslash">
       <span class="en">
         <span class="caseUp hidden">|</span>
         <span class="caseDown">&#92;</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">/</span>
         <span class="caseDown">&#92;</span>
       </span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="Enter">
       <span class="">Enter</span>
     </div>
   </div>
   <div class="keyboard-row">
     <div class="keyboard-button keyboard-button_button-type_control" id="ShiftLeft">
       <span class="">Shift Left</span>
     </div>
     <div class="keyboard-button" id="KeyZ">
       <span class="en">
         <span class="caseUp hidden">Z</span>
         <span class="caseDown">z</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Я</span>
         <span class="caseDown">я</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyX">
       <span class="en">
         <span class="caseUp hidden">X</span>
         <span class="caseDown">x</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Ч</span>
         <span class="caseDown">ч</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyC">
       <span class="en">
         <span class="caseUp hidden">C</span>
         <span class="caseDown">c</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">С</span>
         <span class="caseDown">с</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyV">
       <span class="en">
         <span class="caseUp hidden">V</span>
         <span class="caseDown">v</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">М</span>
         <span class="caseDown">м</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyB">
       <span class="en">
         <span class="caseUp hidden">B</span>
         <span class="caseDown">b</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">И</span>
         <span class="caseDown">и</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyN">
       <span class="en">
         <span class="caseUp hidden">N</span>
         <span class="caseDown">n</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Т</span>
         <span class="caseDown">т</span>
       </span>
     </div>
     <div class="keyboard-button" id="KeyM">
       <span class="en">
         <span class="caseUp hidden">M</span>
         <span class="caseDown">m</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Ь</span>
         <span class="caseDown">ь</span>
       </span>
     </div>
     <div class="keyboard-button" id="Comma">
       <span class="en">
         <span class="caseUp hidden">&#62;</span>
         <span class="caseDown">,</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Б</span>
         <span class="caseDown">б</span>
       </span>
     </div>
     <div class="keyboard-button" id="Period">
       <span class="en">
         <span class="caseUp hidden">&#60;</span>
         <span class="caseDown">.</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">Ю</span>
         <span class="caseDown">ю</span>
       </span>
     </div>
     <div class="keyboard-button" id="Slash">
       <span class="en">
         <span class="caseUp hidden">?</span>
         <span class="caseDown">/</span>
       </span>
       <span class="ru hidden">
         <span class="caseUp hidden">,</span>
         <span class="caseDown">.</span>
       </span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="ArrowUp">
       <span class="keyboard-button__button-ArrowUp">&#8593;</span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="ShiftRight">
       <span class="">Shift Right</span>
     </div>
   </div>
   <div class="keyboard-row">
     <div class="keyboard-button keyboard-button_button-type_control" id="ControlLeft">
       <span class="keyboard-button__button-control">Ctrl</span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="MetaLeft">
       <span class="keyboard-button__button-MetaLeft">Win</span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="AltLeft">
       <span class="keyboard-button__button-AltLeft">Alt</span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="Space">
       <span class="keyboard-button__button-space">Space</span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="AltRight">
       <span class="keyboard-button__button-AltRight">Alt</span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="ArrowLeft">
       <span class="keyboard-button__button-ArrowLeft">&#8592;</span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="ArrowDown">
       <span class="keyboard-button__button-ArrowDown">&#8595;</span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="ArrowRight">
       <span class="keyboard-button__button-ArrowRight">&#8594;</span>
     </div>
     <div class="keyboard-button keyboard-button_button-type_control" id="ControlRight">
       <span class="keyboard-button__button-control">Ctrl</span>
     </div>
   </div>
  </div>
 <p>Клавиатура разрабатывалась в OS Windows</p>
 <p>Сочетание смены языка-Ctrl+Shift</p>
</div>`;

let language = localStorage.getItem("Lan");

if (language === null) {
  localStorage.setItem("Lan", "en");
  language = localStorage.getItem("Lan");
}

console.log("Current language: " + language);

let capsLock = false;
let shift = false;
let control = false;
let keyboardUP = false;
let value = [];
let controlKey = [
  "CapsLock",
  "Shift",
  "Control",
  "Meta",
  "Alt",
  " ",
  "Backspace",
  "Enter",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
];
let otherKeyCode = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Key",
  "Quote",
  "Backslash",
  "IntlBackslash",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Comma",
  "Period",
  "Slash",
];

let main = function (mainContent) {
  document.querySelector("body").insertAdjacentHTML("afterbegin", mainContent);
};

//change keyboard display
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
const keydown = (event) => {
  el = document.getElementById(event.code);
  let currentValue = event.key;
  let currentCode = event.code;

  //Exception Handling
  if (!controlKey.includes(currentValue) && !otherKeyCode.includes(currentCode))
    return;

  //event for control buttons
  if (controlKey.includes(currentValue)) {
    console.log(controlKey.includes(currentValue));
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
  if (otherKeyCode.includes(currentCode)) {
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
const keyup = (event) => {
  el = document.getElementById(event.code);
  let currentValue = event.key;
  let currentCode = event.code;

  //Exception Handling
  if (
    !controlKey.includes(currentValue) &&
    !otherKeyCode.includes(currentCode)
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
    console.log("Change lan");
    console.log(language);

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
main(mainContent);

//display modified keyboard
changeCaseKeyboard();

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);