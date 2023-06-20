// Assignment 1 | COMP1073 Client-Side JavaScript.

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.getElementById('button6');
const resetButton = document.getElementById('resetButton');
const storyElement = document.getElementById('story');

let subjectArray = ['The cat', 'The dog', 'The bird', 'The rabbit', 'The turtle'];
let verbArray = ['ate', 'ran', 'jumped', 'slept', 'played'];
let adjectiveArray = ['beautiful', 'funny', 'happy', 'sleepy', 'clever'];
let objectArray = ['ball', 'hat', 'book', 'chair', 'toy'];
let settingArray = ['in the park', 'at the beach', 'in the forest', 'at home', 'in the garden'];

let generatedSubject = '';
let generatedVerb = '';
let generatedAdjective = '';
let generatedObject = '';
let generatedSetting = '';

/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  const utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

function generateRandomPhrase(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateSubject() {
  generatedSubject = generateRandomPhrase(subjectArray);
}

function generateVerb() {
  generatedVerb = generateRandomPhrase(verbArray);
}

function generateAdjective() {
  generatedAdjective = generateRandomPhrase(adjectiveArray);
}

function generateObject() {
  generatedObject = generateRandomPhrase(objectArray);
}

function generateSetting() {
  generatedSetting = generateRandomPhrase(settingArray);
}

function generateStory() {
  const story = `${generatedSubject} ${generatedVerb} ${generatedAdjective} ${generatedObject} ${generatedSetting}`;
  storyElement.textContent = story;
  speakNow(story);
}

/* Event Listeners
-------------------------------------------------- */
// Event listener for generating a subject
const generateSubjectButton = document.getElementById('button1');
generateSubjectButton.addEventListener('click', generateSubject);

// Event listener for generating a verb
const generateVerbButton = document.getElementById('button2');
generateVerbButton.addEventListener('click', generateVerb);

// Event listener for generating an adjective
const generateAdjectiveButton = document.getElementById('button3');
generateAdjectiveButton.addEventListener('click', generateAdjective);

// Event listener for generating an object
const generateObjectButton = document.getElementById('button4');
generateObjectButton.addEventListener('click', generateObject);

// Event listener for generating a setting
const generateSettingButton = document.getElementById('button5');
generateSettingButton.addEventListener('click', generateSetting);

// Event listener for the "Speak the Story" button
speakButton.addEventListener('click', generateStory);

// Event listener for the "Reset" button
resetButton.addEventListener('click', function () {
  storyElement.textContent = '';
});
