const email = document.getElementById('email');
const discord = document.getElementById('discord');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');

email.addEventListener('click', (e) => copy(getTextForCopy(e.target)));
discord.addEventListener('click', (e) => copy(getTextForCopy(e.target)));

function getTextForCopy(targetElement) {
  return targetElement.textContent.split(': ')[1];
}

function copy(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      showPopup(text);
    })
    .catch(err => console.log('Something went wrong', err));
}

function showPopup(text) {
  popup.style.visibility = 'visible';
  popupContent.textContent = `Copied: ${text}`;
  hidePopup();
}

function hidePopup() {
  setTimeout(() => {
    popup.style.visibility = 'hidden';
  }, 3000)
}