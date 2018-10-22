/** script logic
 * change the accent color depending on the time of day
 * change the job description at random
 * "paint" the background of the .social section while describing the hovered anchor link
 */

// create a function which accepts an array as argument and returns a random item from the same
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// COLOR ACCENT
// compute the color accent choosing a selected hue (although a random color may be picked)
const hue = 9;
// create an instance of the date object
const date = new Date();
// retrieve the hours
// timeOfDay [0-23]
const timeOfDay = date.getHours();
// adjustedTOD mapping hours after or equal to 7 at the beginning of the range
// pushing the hours prior 7 at the very end
// meaning 7 becomes 0, 23 becomes 16
// 0 becomes 17 (0+23-6), 6 becomes 23 (6+23-6)
const adjustedTOD = (timeOfDay >= 7) ? timeOfDay - 7 : timeOfDay + (23 - 6);
// normalizedTOD [0-1]
const normalizedTOD = (adjustedTOD / 23).toFixed(2);
// saturation [40-100]
// lightness [40-60]
// considering the range the other way around (0 -> 1, 1 -> 0)
const saturation = (40 + ((100 - 40)) * (1 - normalizedTOD));
const lightness = (40 + ((60 - 40)) * (1 - normalizedTOD));

// select the root element and update the --color-accent property with the described hsl color
document.documentElement.style.setProperty('--color-accent', `hsl(${hue}, ${saturation}%, ${lightness}%)`);

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

// SOCIAL SECTION
// target all anchor link elements and the container in which to describe the hovered element
const socialLinks = document.querySelectorAll('.social__links a');
const socialCopy = document.querySelector('.social__copy');

// describe each icon and the matching text
const social = [
  {
    link: 'twitter',
    url: 'https://twitter.com/borntofrappe',
    copy: 'Posting almost daily',
    color: '#3fb0fe'
  },
  {
    link: 'freecodecamp',
    url: 'https://www.freecodecamp.org/borntofrappe',
    copy: 'Always learning',
    color: '#109121'
  },
  {
    link: 'codepen',
    url: 'https://codepen.io/borntofrappe/',
    copy: 'Coding plenty',
    color: '#545454'
  },
  {
    link: 'github',
    url: 'https://github.com/borntofrappe',
    copy: 'Open sourcing it all',
    color: '#242424'
  }
];

// create a function which takes as argument the mouseenter event
// in turns this triggers the expansion of the pseudo element, "painting the background"
// this includes also a text matching the hovered anchor link element
function paint(event) {
  // select the hovered element
  const { target } = event;

  // continue unless the element has already been hovered
  if (!target.classList.contains('hovered')) {
    // remove the .hovered class from all elements
    socialLinks.forEach(socialLink => socialLink.classList.remove('hovered'));
    // retrieve the data attribute to match the platform in the defined object
    const { link } = target.dataset;

    // retrieve the object matching the link
    const match = social.find(socialLink => socialLink.link === link);

    // add the class of hovered
    target.classList.add('hovered');
    // include a text with the information retrieved from the matching object
    socialCopy.innerHTML = `
      <h2 style="animation: anchorLinkHover 0.2s 0.18s linear both;">
        ${match.copy}, on <a href="${match.url}" style="color: ${match.color}; text-decoration:none;">${match.link}</a>
      </h2>
    `;
  }
}

// trigger the function whenever hovering on one of the selected anchor links
socialLinks.forEach(socialLink => socialLink.addEventListener('mouseenter', paint));
