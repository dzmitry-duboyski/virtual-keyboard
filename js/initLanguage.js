export default function initLanguage(){
  let language = localStorage.getItem("Lan");
  if (language === null) {
    localStorage.setItem("Lan", "en");
    language = localStorage.getItem("Lan");
  }
}