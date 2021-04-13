import getMainContent from './js/getMainContent.js';
import changeCaseKeyboard from './js/changeCaseKeyboard.js';
import handlingEventKeydown from './js/handlingEventKeydown.js';
import handlingEventKeyup from './js/handlingEventKeyup.js';
import initLanguage from './js/initLanguage.js';
import displayApp from './js/displayApp.js';

initLanguage()
displayApp(getMainContent());
changeCaseKeyboard();

document.addEventListener("keydown", handlingEventKeydown);
document.addEventListener("keyup", handlingEventKeyup);