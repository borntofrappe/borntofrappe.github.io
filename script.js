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
    description: 'Practice with JavaScript, with a visually appealing board.',
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
    description: 'Produce an intriguing, sharp substite to hand-written signatures.',
    stack: [
      'html',
      'css',
      'js',
      'svg'
    ],
    url: 'https://codepen.io/borntofrappe/full/WyVZVp'
  },
  {
    title: 'Card Layout',
    description: 'Display hypothetical blog posts in a convenient format.',
    stack: [
      'html',
      'css',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/xzgKYG'
  },
  {
    title: 'Accordion Layout',
    description: 'Provide detailed information only when requested.',
    stack: [
      'html',
      'css',
      'stylus',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/jKPaBv'
  },
  {
    title: 'Carousel Layout',
    description: 'Highlight information one slide at a time.',
    stack: [
      'html',
      'css',
      'js',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/OoWGYe'
  },
  {
    title: 'Good Error Copy',
    description: 'Detail error messages with empathy and a bit of style.',
    stack: [
      'html',
      'css',
      'js',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/zJJrEV'
  },
  {
    title: 'Check Me If You Can',
    description: 'A simple game built around a single checkbox.',
    stack: [
      'html',
      'css',
      'stylus',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/oMBQyV'
  },
  {
    title: 'Wikipedia Viewer',
    description: 'Look for entries on Wikipedia.',
    stack: [
      'html',
      'css',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/PQNPwM'
  },
  {
    title: 'Pomodoro Clock',
    description: 'Increase productivity one pomodoro at a time.',
    stack: [
      'html',
      'css',
      'stylus',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/PeKwOW'
  },
  {
    title: 'To-Do Application',
    description: 'Schedule the day ahead one item at a time.',
    stack: [
      'html',
      'css',
      'js',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/GBqMdJ'
  },
  {
    title: 'Random Quote Machine',
    description: 'Be inspired by few simple words.',
    stack: [
      'html',
      'css',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/VQYmpJ'
  },
  {
    title: 'Random Color Machine',
    description: 'Pick a new color, at random.',
    stack: [
      'html',
      'css',
      'js',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/yqXOXG'
  },
  {
    title: 'Accountability Booster',
    description: 'Share coding efforts on Twitter, effortlessly.',
    stack: [
      'html',
      'css',
      'js',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/YJWweQ'
  },
  {
    title: 'Traditional Drum Machine',
    description: 'Play a few tones with Japanese-inspired drums.',
    stack: [
      'html',
      'css',
      'js',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/BPOWxo'
  },
  {
    title: 'Pomodoro Clock',
    description: 'Increase productivity one pomodoro at a time.',
    stack: [
      'html',
      'css',
      'js',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/bjvmaJ'
  },
  {
    title: 'Phone Calculator',
    description: 'Compute simple math.',
    stack: [
      'html',
      'css',
      'js',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/OwxKEY'
  },
  {
    title: 'High-Tech Clock',
    description: 'Relate the current time.',
    stack: [
      'html',
      'css',
      'stylus',
      'svg',
      'js',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/wXGKpg'
  },
  {
    title: 'CSS Quiz',
    description: 'Practice with CSS, with a multiple choice game.',
    stack: [
      'html',
      'css',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/OZaOWo'
  },
  {
    title: 'Day Picker',
    description: 'Stop wondering which day it was? Which day it will be',
    stack: [
      'html',
      'css',
      'js',
      'node',
      'pug'
    ],
    url: 'https://witty-recess.glitch.me/'
  },
  {
    title: 'Timestamp Microservice',
    description: 'Retrieve a date, for the current or a selected time.',
    stack: [
      'html',
      'css',
      'js',
      'node'
    ],
    url: 'https://zest-hoe.glitch.me/'
  },
  {
    title: 'File Metadata Microservice',
    description: 'Provide basic information for any file.',
    stack: [
      'html',
      'css',
      'js',
      'node'
    ],
    url: 'https://zest-hoe.glitch.me/'
  },
  {
    title: 'Exercise Tracker Microservice',
    description: 'Create an account. Register excercises.',
    stack: [
      'html',
      'css',
      'js',
      'node'
      // ,'mongo', 'mongoose'
    ],
    url: 'https://bold-lamprey.glitch.me/'
  },
  {
    title: 'URL Shortener Microservice',
    description: 'Process a lengthy URL, creating a short, valid counterpart.',
    stack: [
      'html',
      'css',
      'js',
      'node'
      // ,'mongo', 'mongoose'
    ],
    url: 'https://various-umbrella.glitch.me/'
  },
  {
    title: 'Road Safety Metrics',
    description: 'Visualize statistics connected to road safety in mainland France.',
    stack: [
      'html',
      'css',
      'stylus',
      'js',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/XxBXeR'
  },
  {
    title: 'Hacktoberfest Dashboard',
    description: 'Highlight statistics for to the Hacktoberfest initiative.',
    stack: [
      'html',
      'css',
      'stylus',
      'js',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/VEMGjP'
  },
  {
    title: 'Unemployment Rate',
    description: 'Chart the evolution of the unemployment rate in France.',
    stack: [
      'html',
      'css',
      'stylus',
      'js',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/dqQjwj'
  },
  {
    title: 'Treemap Diagram',
    description: 'Describe the highest grossing movies in a convenient visual.',
    stack: [
      'html',
      'css',
      'stylus',
      'js',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/RYbaOo'
  },
  {
    title: 'Choropleth Map',
    description: 'Detail the educational attainment in the US.',
    stack: [
      'html',
      'css',
      'stylus',
      'js',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/RBdrPG'
  },
  {
    title: 'Bar Chart',
    description: 'Plotting the gross domestic product for the US.',
    stack: [
      'html',
      'css',
      'js',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/qKeGLM'
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
<h2 style="animation: showProject 0.3s ease-out both">${project.title}</h2>
<p style="animation: showProject 0.3s 0.05s ease-out both">${project.description}</p>
<ul style="animation: showProject 0.3s 0.08s ease-out both">
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
