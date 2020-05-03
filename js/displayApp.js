export default function displayApp(getMainContent) {
  document.querySelector("body").insertAdjacentHTML("afterbegin", getMainContent);
};