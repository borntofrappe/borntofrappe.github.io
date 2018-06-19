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