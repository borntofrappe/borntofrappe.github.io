/** SCRIPT LOGIC
 * accent color (change brightness and saturation depending on the time of day)
 * job description (change the third title with a string at random)
 * project (include a project from a selected few)
 * social icons (paint the background when hovering on the icons)
*/

/* utility functions
- a function returning a random item from an array
- a function returning a random number between a min and max optional values
*/
const randomItem = array => array[Math.floor(Math.random() * array.length)];
const randomInteger = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min);


// ACCENT COLOR
// compute the color accent from the selected hue
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
  'by day',
  'possibly more'
];
// target the <i> element wrapping the job description
const jobDescription = document.querySelector('i');
// change the text of the <i> element from one of the expressions at random
jobDescription.textContent = randomItem(job);

// PROJECT
// describe the projects in an array
const projects = [
  /* each object including
  - title
  - description
  - stack (an array of strings describing the technology stack)
  - url forwarding toward the project
  */
  {
    title: 'Teaching Dashboard',
    description: 'An appealing visual summarising valuable information on JavaScript methods.',
    stack: [
      'html',
      'css',
      'js',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/KxdOVo'
  },
  {
    title: 'Signature Generator',
    description: 'An intriguing substite to hand-written signatures.',
    stack: [
      'html',
      'css',
      'js',
      'svg'
    ],
    url: 'https://codepen.io/borntofrappe/full/WyVZVp'
  },
  {
    title: 'CSS Quiz',
    description: 'A multiple choice game to practice with CSS.',
    stack: [
      'html',
      'css',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/OZaOWo'
  },
  {
    title: 'Day Picker',
    description: 'No longer wondering which day it was. Or it will be.',
    stack: [
      'html',
      'css',
      'js',
      'node',
      'pug'
    ],
    url: 'https://witty-recess.glitch.me/'
  }
];
// create a function creating a new value for the border radius property
const borderRadius = () => {
  // store 8 random percentages in an array
  const randomNumbers = [];
  for (let i = 0; i < 8; i += 1) {
    randomNumbers.push(`${randomInteger()}%`);
  }
  // return a string which includes a forward slash after the 4th item
  return [...randomNumbers.slice(0, 4), '/', ...randomNumbers.slice(4)].join(' ');
};

// create a function fabricating the markup for each project
const projectMarkup = project => `
<h2>${project.title}</h2>
<p>${project.description}</p>
<ul>
${project.stack.map(stack => `
  <li>
    <svg>
      <use href="#${stack}-icon"/>
    </svg>
  </li>
`).join('')}
</ul>
`;

// create a function to populate the project section
const addProject = (project) => {
  // change the border-radius property of the project icon
  const projectIcon = document.querySelector('.project__icon');
  projectIcon.style.borderRadius = borderRadius();
  // target the article
  const projectInfo = document.querySelector('.project--info');
  // add the selected project
  projectInfo.innerHTML = projectMarkup(project);

  // target the anchor link element and add the URL
  const projectLink = document.querySelector('.project--controls a');
  projectLink.setAttribute('href', project.url);
};

addProject(randomItem(projects));

// add an event listener on the button element
const projectButton = document.querySelector('.project--controls button');
// on click call the function to add a new project
projectButton.addEventListener('click', () => addProject(randomItem(projects)));

// SOCIAL ICONS
// describe the social links in an array
const social = [
  /* each object including
  - link, to match the anchor link with a data-link attribute
  - url, forwarding toward the profile
  - copy, describing a brief description for each profile
  - color, match each icons' color
  */
  {
    link: 'twitter',
    url: 'https://twitter.com/borntofrappe',
    copy: 'Posting almost daily',
    // the color might very well be retrieved from the stylesheet
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
  },
  {
    link: 'glitch',
    url: 'https://glitch.com/@borntofrappe',
    copy: 'Testing the back end',
    color: '#923df2'
  }
];

// target all anchor link elements and the container in which to describe the hovered element
const socialLinks = document.querySelectorAll('.social__links a');
const socialCopy = document.querySelector('.social__copy');

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
      <h2 style="animation: hovered 0.2s 0.18s linear both;">
        ${match.copy}, on <a href="${match.url}" style="color: ${match.color}; text-decoration:none;">${match.link}</a>
      </h2>
    `;
  }
}

// trigger the function whenever hovering on one of the selected anchor links
socialLinks.forEach(socialLink => socialLink.addEventListener('mouseenter', paint));
socialLinks.forEach(socialLink => socialLink.addEventListener('focus', paint));
