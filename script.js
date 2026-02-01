const diceButton = document.getElementById('diceButton');
const adviceText = document.getElementById('adviceText');
const adviceNumber = document.getElementById('adviceNumber');


const advices = [
  { id: 117, text: "It is easy to sit up and take notice, what's difficult is getting up and taking action." },
  { id: 42, text: "Don’t watch the clock; do what it does. Keep going." },
  { id: 7, text: "Success is not for the lazy. Take the first step today." }
];

let currentAdvice = 0;

function showNextAdvice() {
  adviceNumber.textContent = advices[currentAdvice].id;
  adviceText.textContent = `"${advices[currentAdvice].text}"`;
  currentAdvice = (currentAdvice + 1) % advices.length;
}

diceButton.addEventListener('click', showNextAdvice);

showNextAdvice();