# Welcome Page

> repo gathering the resouces making up my [personal website](https://borntofrappe.github.io/)

## Issues

> updated 29/10/2018

Recently, I discovered an issue with my personal website on firefox. Something that had to do with the SVG icons used for the technology stack and something stemming from the following:

- SVG icons were defined atop the HTML file with an explicit `width` and `height` value of `100px`;

- in the stylesheet, the same SVG icons were resized to be `78px`.

However, this last re-sizing was being applied on the SVG elements as they were being used, in the following format.

```html
<svg>
  <use href="#previously-declared-icon"/>
</svg>
```

Apparently and on Firefox, changing the size of this element doesn't affect the previous 100px by 100px explicit measures.

Solution: remove the explicit measure, have the SVG being styled solely on the basis of the stylesheet. I tried this in a previous commit, but immediately found another issue in an old version of Edge and reversed the changes, suspecting this last browser somehow needed the explicit sizes. However, upon thorough consideration, it is clear the issue was raised because of a completely separate situation. I therefore push anew for removing the explicit measures.

## Roadmap

> Short to mid-term goals

- [ ] add a simple animation atop the page, in the form of an airplane passing by every so often (perhaps only for smaller viewports where there is quite a bit of white space atop the application).

- [ ] consider re-designing the icon for styled-components. Consider new icons for the upcoming back end projects.

- [x] in the bottom of the page detail a simple drawing application through the canvas element.
