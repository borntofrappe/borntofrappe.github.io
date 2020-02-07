/** SCRIPT LOGIC
 * accent color (change brightness and saturation depending on the time of day)
 * job description (change the third title with a string at random)
 * project section (include a project from a selected few)
 * social section (paint the background when hovering on the icons)
*/

/* utility functions
- a function returning a random item from an array
- a function returning a random number between a min and max optional values
*/
const randomItem = array => array[Math.floor(Math.random() * array.length)];
const randomInteger = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min);


// ACCENT COLOR
// compute the color accent from the selected hue
const hue = 340;
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

// PROJECT SECTION
// describe the projects in an array
const projects = [
  /* each object including
  - title
  - description
  - stack (an array of strings describing the technology stack)
  - url forwarding toward the project
  */
  {
    title: 'JavaScript Dashboard',
    description: 'Practice with JavaScript methods with an appealing and interactive board.',
    stack: [
      'css',
      'react'
      // styled-components
    ],
    url: 'https://codepen.io/borntofrappe/full/KxdOVo'
  },
  {
    title: 'Signature Generator',
    description: 'Create an intriguing, sharp substite to hand-written signatures.',
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
    description: 'Shuffle between hypothetical blog posts in a simple, yet effective format.',
    stack: [
      'html',
      'css',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/xzgKYG'
  },
  {
    title: 'Accordion Layout',
    description: 'Display general information and provide details only when requested.',
    stack: [
      'html',
      'stylus',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/jKPaBv'
  },
  {
    title: 'Carousel Layout',
    description: 'Create a simple component displaying information one slide at a time.',
    stack: [
      'html',
      'css',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/OoWGYe'
  },
  {
    title: 'Good Error Copy',
    description: 'Display error messages with empathy and a bit of style.',
    stack: [
      'css',
      'react',
      'styled-components'
    ],
    url: 'https://codepen.io/borntofrappe/full/zJJrEV'
  },
  {
    title: 'Check Me If You Can',
    description: 'Play a simple game based entirely around a single checkbox.',
    stack: [
      'html',
      'stylus',
      'js',
      'svg'
    ],
    url: 'https://codepen.io/borntofrappe/full/oMBQyV'
  },
  {
    title: 'Wiki Viewer',
    description: 'Search for Wikipedia entries.',
    stack: [
      'html',
      'css',
      'js',
      'svg'
    ],
    url: 'https://codepen.io/borntofrappe/full/PQNPwM'
  },
  {
    title: 'Pomodoro Clock',
    description: 'Increase productivity one pomodoro at a time.',
    stack: [
      'html',
      'stylus',
      'js',
      'svg'
    ],
    url: 'https://codepen.io/borntofrappe/full/PeKwOW'
  },
  {
    title: 'To-Do Application',
    description: 'Schedule the day ahead one item at a time.',
    stack: [
      'css',
      'js',
      'react',
      'redux'
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
      // jquery
    ],
    url: 'https://codepen.io/borntofrappe/full/VQYmpJ'
  },
  {
    title: 'Random Color Machine',
    description: 'Pick a new color, at random.',
    stack: [
      'css',
      'react',
      'redux'
    ],
    url: 'https://codepen.io/borntofrappe/full/yqXOXG'
  },
  {
    title: 'Accountability Booster',
    description: 'Share coding efforts on Twitter, effortlessly.',
    stack: [
      'css',
      'react',
      'redux',
      'styled-components'
    ],
    url: 'https://codepen.io/borntofrappe/full/YJWweQ'
  },
  {
    title: 'Traditional Drum Machine',
    description: 'Play a few tones with Japanese-inspired drums.',
    stack: [
      'css',
      'react',
      'styled-components'
    ],
    url: 'https://codepen.io/borntofrappe/full/BPOWxo'
  },
  {
    title: 'Pomodoro Clock',
    description: 'Increase productivity one pomodoro at a time.',
    stack: [
      'css',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/bjvmaJ'
  },
  {
    title: 'Phone Calculator',
    description: 'Compute simple mathematical operations.',
    stack: [
      'css',
      'react',
      'styled-components'
    ],
    url: 'https://codepen.io/borntofrappe/full/OwxKEY'
  },
  {
    title: 'High-Tech Clock',
    description: 'Showcase the current time with a sharp and punctual visual.',
    stack: [
      'stylus',
      'svg',
      'react'
    ],
    url: 'https://codepen.io/borntofrappe/full/wXGKpg'
  },
  {
    title: 'CSS Quiz',
    description: 'Practice with CSS with a multiple choice game.',
    stack: [
      'html',
      'css',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/OZaOWo'
  },
  {
    title: 'Day Picker',
    description: 'Stop wondering which day it was, or which day it will be',
    stack: [
      'pug',
      'css',
      'node'
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
      'sass',
      'js',
      'node'
    ],
    url: 'https://melted-grin.glitch.me/'
  },
  {
    title: 'Exercise Tracker Microservice',
    description: 'Create an account and register exercises, safely stored in a database.',
    stack: [
      'html',
      'sass',
      'node',
      'mongo',
      'mongoose'
    ],
    url: 'https://bold-lamprey.glitch.me/'
  },
  {
    title: 'URL Shortener Microservice',
    description: 'Process a lengthy URL, creating a short and valid counterpart.',
    stack: [
      'html',
      'sass',
      'node',
      'mongo',
      'mongoose'
    ],
    url: 'https://various-umbrella.glitch.me/'
  },
  {
    title: 'Road Safety',
    description: 'Visualize statistics on road safety in mainland France.',
    stack: [
      'stylus',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/XxBXeR'
  },
  {
    title: 'Hacktoberfest Dashboard',
    description: 'Highlight statistics for to the Hacktoberfest initiative.',
    stack: [
      'stylus',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/VEMGjP'
  },
  {
    title: 'Unemployment Rate',
    description: 'Chart the evolution of the unemployment rate in France.',
    stack: [
      'stylus',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/dqQjwj'
  },
  {
    title: 'Highest Grossing Movies',
    description: 'Highlight movies according to sales and genre.',
    stack: [
      'stylus',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/RYbaOo'
  },
  {
    title: 'US Educational Attainment',
    description: 'Detail in a choropleth map educational metrics for every single county of th US.',
    stack: [
      'stylus',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/RBdrPG'
  },
  {
    title: 'Global Land Temperatures',
    description: 'Plot the evolution of the average temperature across the centuries.',
    stack: [
      'css',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/qKeGLM'
  },
  {
    title: 'US Gross Domestic product',
    description: 'Plot GDP for the United States of America, and since 1947.',
    stack: [
      'css',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/mKGZaO'
  },
  {
    title: 'Alpe Duez Records',
    description: 'Visualize cycling records considering doping allegations.',
    stack: [
      'css',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/ERzybV'
  },
  {
    title: 'Winter-themed Quiz',
    description: 'Answer multiple-choice questions regarding the winter seasons and its common misconceptions.',
    stack: [
      'css',
      'react',
      'redux',
      'styled-components'
    ],
    url: 'https://codepen.io/borntofrappe/full/ZqwVmm'
  },
  {
    title: 'Fuel and Taxes Infograph',
    description: 'Visualize the evolution of prices for gasoline and diesel, given the recent changes to French legislation.',
    stack: [
      'sass',
      'd3'
    ],
    url: 'https://codepen.io/borntofrappe/full/YRGGWY'
  },
  {
    title: 'Who\'s that Pokemon?',
    description: 'Play a simple game inspired by the original anime series.',
    stack: [
      'react',
      'styled-components',
      // react-spring
    ],
    url: 'https://codepen.io/borntofrappe/full/GwYLRw'
  },
  {
    title: 'React SVGatch',
    description: 'Catch a glimpse of the current time through a stylish analog watch.',
    stack: [
      'react',
      'svg',
    ],
    url: 'https://codepen.io/borntofrappe/full/ebRVJd'
  },
  {
    title: 'React Timer',
    description: 'Count down to a specific time with a practical and enticing timer.',
    stack: [
      'react',
      'styled-components',
      // react spring
    ],
    url: 'https://codepen.io/borntofrappe/full/dwVZRQ'
  },
  {
    title: 'freeCodeCamp Podcast App',
    description: 'Listen to the freeCodeCamp podcast in this unofficial application.',
    stack: [
      'react',
      'styled-components',
    ],
    url: 'https://codepen.io/borntofrappe/full/yGbpMm'
  },
  {
    title: 'Infinity Maze',
    description: 'Explore a completely unbiased labyrinth in an endless maze runner.',
    stack: [
      'svelte',
      'js',
      'svg',
    ],
    url: 'https://codepen.io/borntofrappe/full/pooeyww'
  },
  {
    title: 'Key Value Pairs',
    description: 'Perform CRUD operations on an hypothetical inventory and highlight the metrics through data visualizations.',
    stack: [
      'svelte',
      'd3',
    ],
    url: 'https://codepen.io/borntofrappe/full/rNBEYWM'
  },
  {
    title: 'Day & Night Toggle',
    description: 'Toggle the state of a checkbox to highlight two clear, distinct times of the day.',
    stack: [
      'svg',
      'css',
    ],
    url: 'https://codepen.io/borntofrappe/full/aboPapm'
  },
  {
    title: 'A Matter of Gravity',
    description: 'Use gravity to position a ball on top of a goalpost.',
    stack: [
      'matter',
      'css',
    ],
    url: 'https://codepen.io/borntofrappe/full/mddEvEW'
  },
  {
    title: 'Searching Rod',
    description: 'Fetch a few fish names with a retro look and an entertaining search field.',
    stack: [
      'js',
      'svg',
      'css'
    ],
    url: 'https://codepen.io/borntofrappe/full/ZdXMwM'
  },
  {
    title: 'Smart Watch',
    description: 'Play with a few apps on an a mobile interface.',
    stack: [
      'svelte',
      'svg',
    ],
    url: 'https://codepen.io/borntofrappe/full/bGGWMBx'
  },
  {
    title: 'Concentration',
    description: 'Match cards in pairs.',
    stack: [
      'svelte',
      'css'
    ],
    url: 'https://codepen.io/borntofrappe/full/yLLVNME'
  },
  {
    title: 'Connect the Dots',
    description: 'Draw a few lines to detail a familiar shape.',
    stack: [
      'svg',
      'html',
      'js'
    ],
    url: 'https://codepen.io/borntofrappe/full/LYPWLMv'
  },
  {
    title: 'Double Slider Form',
    description: 'Slide between a sign in and and a sign up form with style.',
    stack: [
      'react',
      'css'
    ],
    url: 'https://codepen.io/borntofrappe/full/OGyJbm'
  },
  {
    title: 'Light & Dark Theme',
    description: 'Style the UI of a mobile device with two themes.',
    stack: [
      'svg',
      'css'
    ],
    url: 'https://codepen.io/borntofrappe/full/WBWxZw'
  }
];

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

// SOCIAL SECTION
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

