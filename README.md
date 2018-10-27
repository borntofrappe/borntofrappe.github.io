# Welcome Page

> repo gathering the resouces making up my [personal website](https://borntofrappe.github.io/)

## Issues

> Pressing matters

There's seems to be quite a bug in Firefox. The SVG icons for the technology stack, and amusingly enough not those for the social icons, are indeed cropped. I assume it has something to do with default and explicit sizes. 

**Update**

A bit of experimentation helps guides me toward the following conclusion: it is a matter of explicit sizes only. In the "SVG" set I include icons with explicit values for the width and the height properties. These are 100px by 100px. In the DOM, I later set the size of the SVG to be 78px, but on firefox (apparently) this does not modify the original SVG, but the container in which the SVG is used. The original SVG gets cropped out, seemingly by 22px on either size.

**To Do**

Try to remove the default sizes in the SVG set.

## Roadmap

> Short to mid-term goals

- [ ] add a simple animation atop the page, in the form of an airplane passing by every so often (perhaps only for smaller viewports where there is quite a bit of white space atop the application).

- [ ] consider re-designing the icon for styled-components. Consider new icons for the upcoming back end projects.

- [ ] in the bottom of the page detail a simple drawing application through the canvas element.
