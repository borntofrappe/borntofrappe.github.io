/** script logic
 * change the accent color on load
 * change the job description on load
 */
// create a function which accepts an array as argument and returns a random item from the same
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
// COLOR ACCENT
const accent = [
  '#47ffb1',
  '#ff6347',
  '#245DCC',
  '#CDFF60'
];
// select the root element and update the --color-accent property with a hue picked at random
document.documentElement.style.setProperty('--color-accent', randomItem(accent));

// JOB DESCRIPTION
// detail a series of catchy expression
const job = [
  'who knows what next',
  'something else tomorrow',
  'depends who\'s asking',
  'still figuring it out',
  'by day'
];
// target the <i> element wrapping the job description
const jobDescription = document.querySelector('i');
// change the text of the <i> element from one of the expressions at random
jobDescription.textContent = randomItem(job);
