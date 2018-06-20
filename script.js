// target the toggle button and the panel to be toggled
const toggleButton = document.querySelector(".navbar__toggle-links");
const linksPanel = document.querySelector(".navbar__links");
// target the anchor link elements, to close the panel upon choosing a section
// as this is an option used only on small scren devices, add the event listener when the panel is indeed active
const anchorLinks = linksPanel.querySelectorAll("a");

// listen for a click event on the toggle button, at which point toggle the panel showing the div with the anchor links
toggleButton.addEventListener("click", toggleNav);

// create a function which toggles the div with anchor links by toggling a class predisposed to show the div in the viewport
function toggleNav() {
    toggleButton.classList.toggle("toggle-button-active");
    linksPanel.classList.toggle("panel-active");
}

// listen for a click event on the anchor links, at which point check if the panel is active and close it
anchorLinks.forEach(anchorLink => anchorLink.addEventListener("click", closePanel));

// create a function which closes the panel with anchor links, if open
function closePanel() {
    if(linksPanel.classList.contains("panel-active")) {
        toggleNav();
    }
}


/* include with an array of objects detailing a few projects
detailing 
- title
- concise description
- url
- identifier (used for the SVG icon)

these are accessible through:

projects[indexOfArray].propertyOfObject
projects[indexOfArray]["propertyOfObject"]
*/
const projects = [
    {
        title: "Pomodoro Clock",
        description: "A pomodoro clock I actually and often use to boost my productivity.",
        url: "https://codepen.io/borntofrappe/full/PeKwOW",
        reference: "pomodoro-clock"
    },
    {
        title: "Wikipedia Viewer",
        description: "A wiki viewer to find encyclopedic information with style.",
        url: "https://codepen.io/borntofrappe/full/PQNPwM",
        reference: "wikipedia-viewer"
    },
    {
        title: "JavaScript Calculator",
        description: "A staple of what computers can achieve, allowing fast and reliable computations.",
        url: "https://codepen.io/borntofrappe/full/zjNKYG",
        reference: "javascript-calculator"
    },
    {
        title: "Simon Game",
        description: "A simple game in which to press colored buttons, in sequence.",
        url: "https://codepen.io/borntofrappe/full/jxXBgm",
        reference: "simon-game"
    }
    // {
    //     title: "CSS Quiz",
    //     description: "",
    //     url: "https://codepen.io/borntofrappe/full/OZaOWo",
    //     reference: "css-quiz"
    // }
    
];

// target the elements in which the information regarding the projects is to be included
const displayProject = document.querySelector(".projects__showcase .showcase--description");

// the <use> tag, whose attribute [href] needs to be updated with the project reference, directing toward the appropriate icon
const svgProject = document.querySelector(".projects__showcase .showcase--description svg use");

// the paragraph in which to include the project's description
const descriptionProject = document.querySelector(".projects__showcase .showcase--description p");

// the anchor link elements, whose attribute [href] needs to match the url of the project
const urlProject = document.querySelector(".projects__showcase .showcase--actions a");

// listen to a click event on the button which triggers a search for a new project
const buttonProjects = document.querySelector(".projects__showcase .showcase--actions button");
buttonProjects.addEventListener("click", showNewProject);

// define a function which randomly selects a project from the defined array of objects and includes the pertinent information in the projects' section
function showNewProject() {
    // retrieve a random project from the array 
    let randomIndex = Math.floor(Math.random() * projects.length);
    // randomProject holds now an object in the array
    let randomProject = projects[randomIndex];

    // update the svg icon through the href attribute of the nested use tag
    svgProject.setAttribute("href", `#${randomProject.reference}`);
    // update the description of the project 
    descriptionProject.textContent = randomProject.description;
    // update the anchor link directing toward the actual project
    urlProject.setAttribute("href", randomProject.url);

    // add a class to the description element which animates it as a new project is included
    // remove it after the transition is completed
    displayProject.classList.add("showcase--description--new");
    let timeoutID = setTimeout(() => {
        displayProject.classList.remove("showcase--description--new");
        clearTimeout(timeoutID);
        // remove the class 100ms after the transition is completed, to give a moment of pause
    }, 400);
}