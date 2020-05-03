import state from './state.js';

export default function changeCaseKeyboard(){
 
  let language = localStorage.getItem("Lan");

  if (language === "ru") {
    //display current language
    document.querySelectorAll(".keyboard-button > span.en").forEach((el) => {
      el.classList.add("hidden");
    });
    document.querySelectorAll(".keyboard-button > span.ru").forEach((el) => {
      el.classList.remove("hidden");
    });

    if (state.keyboardUP === false) {
      document.querySelectorAll("span.ru span.caseUp").forEach((el) => {
        el.classList.add("hidden");
      });
      document.querySelectorAll("span.ru span.caseDown").forEach((el) => {
        el.classList.remove("hidden");
      });
    }
    if (state.keyboardUP === true) {
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

    if (state.keyboardUP === false) {
      document.querySelectorAll("span.en span.caseUp").forEach((el) => {
        el.classList.add("hidden");
      });
      document.querySelectorAll("span.en span.caseDown").forEach((el) => {
        el.classList.remove("hidden");
      });
    }
    if (state.keyboardUP === true) {
      document.querySelectorAll("span.en span.caseUp").forEach((el) => {
        el.classList.remove("hidden");
      });
      document.querySelectorAll("span.en span.caseDown").forEach((el) => {
        el.classList.add("hidden");
      });
    }
  }
};