# borntofrappe.github.io

A static website on Github Pages.

## Dev notes

In the `dev` folder find directories devoted to individual features and experiments.

### spritesheet-lua-love2d

Small playground with Lua and Love2D to showcase what I want to achieve with the pixelated spritesheet.

Repeat a tile, the 4 by 4 square with a light green color, in the background, and then render the character, horizon line and field at the bottom of the window. Following a specific action, which in the demo means pressing the `down` arrow key, animate the player through its four possible frames, the field in its `y` coordinate.

The demo includes a few Love2D specifc features, but understanding their purpose is more important than learning how the functions work. The quads help to section the spritesheet into its multiple components: player, horizon line, field and background tile. The sprite batch helps to efficiently draw a series of visuals, especially those visuals which do not change over time like the tiles in the background and the repeated horizon line. The stencil helps to hide the field as it moves above the horizon line.

In the website, the player and field could be updated with an animation, on a loop, but also following a specific action, or again through the intersection observer API.

### spritesheet-html-css

Moving from the Lua & Love2D test, the project structures the HTML document to always have the character visible in the bottom section. The idea is to animate the sprite of the character and that of the field on scroll.

> ! the spritesheet is modified to lay the frames vertically

In terms of HTML, the document does little but forcing the height of the body to stretch the window's viewport.

The sprites are meant to be decorative and added through the empty `<div>` at the bottom of the document.

```html
<div id="sprites"></div>
```

In terms of CSS:

- add the pixelated tile in the background of the body with a data URI. Scale the asset (4 pixels being a tad too small) and use `image-rendering` to preserve the pixelated look

- add a pseudo element to the body to cover the visible area, the window's viewport, with viewport units. Here the goal is to repeat the same background, but fix the visual so that you always see the "wall of tiles" even as you scroll. Use position `fixed` to achieve the result

For the sprites:

- fix the empty div at the bottom of the page with a height of 64pixels (the height of the frames in the spritesheet)

- use the empty div to show the field, repeating the visual horizontally (since the element is as tall as one frame you can make due without the `background-repeat` property altogether)

- use the `::before` pseudo element to position the edge of the field (8 pixels total) above the empty div

- use `::after` to position the character (64 by 64 pixels) above the empty div _and_ and above the previous pseudo element

For the animation you would change the `background-position-y` property with the `steps()` timing function.

```css
#sprites::after {
	animation: step-character 0.8s steps(4) infinite;
}

#sprites {
	animation: step-field 4.4s steps(22) infinite;
}
```

`0.8` for the character, `4.4` for the field since there are 4 frames for the character, 22 for the field (`4.4s = 0.8s / 4 * 22`).

Since you want to animate the sprites on scroll, however, prevent the looping animation.

```css
#sprites,
#sprites::after {
	animation-play-state: paused;
}
```

Re-introduce the animation with a specific class.

```css
#sprites.step,
#sprites.step::after {
	animation-play-state: running;
}
```

Moving on with JavaScript, the scroll-based animation is rather tentative, but is implemented as follows:

- initialize a variable for the number of milliseconds after which you would stop the animation

- initialize a variable for the reference to the `setTimeout` function

With this setup listen to the `scroll` event on the window. It might be a good idea to throttle the event, but given the scope of the functionality (adding/removing a class to run a CSS animation) the addition might be less than necessary.

When scrolling:

- clear the existing timeout, if any

- add the class to animate the sprites

- create a timeout to remove the timeout and remove the class

> ! the script also considers the preference for reduced motion to add/remove the event listener

### fonts

How to include the custom, pixelated font chosen for the project.

Preload the font files.

```html
<link rel="preload" href="fonts/webfont.woff2" as="font" type="font/woff2" crossorigin />
<!-- repeat for woff -->
```

Reference in the `<style>` tag with the `@font-face` rule.

```css
@font-face {
	font-family: 'PixelatedFont';
	src: url('webfont.woff2') format('woff2'), url('webfont.woff') format('woff');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
}
```

Use.

```css
body {
	font-family: 'PixelatedFont', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
```
