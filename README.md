# borntofrappe.github.io

A static website on Github Pages.

## Dev notes

In the `dev` folder find directories devoted to individual features and experiments.

### spritesheet-lua-love2d

A small playground with Lua and Love2D to showcase what I want to achieve with a pixelated spritesheet.

Repeat a tile, the 4 by 4 square with a light green color, in the background, and then render the character, horizon line and field at the bottom of the window. Following a specific action, which in the demo means pressing the `down` arrow key, animate the player through its four possible frames, the field in its `y` coordinate.

The demo includes a few Love2D specifc features, but understanding their purpose is more important than learning how the functions work. The quads help to section the spritesheet into its multiple components: player, horizon line, field and background tile. The sprite batch helps to efficiently draw a series of visuals, especially those visuals which do not change over time like the tiles in the background and the repeated horizon line. The stencil helps to hide the field as it moves above the horizon line.

In the website, the player and field could be updated with an animation, on a loop, but also following a specific action, or again through the intersection observer API.

### spritesheet-html-css

### fonts

How to include the custom, pixelated font chosen for the project.

Preload the font files.

```html
<link
  rel="preload"
  href="fonts/webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
<!-- repeat for woff -->
```

Reference in the `<style>` tag with the `@font-face` rule.

```css
@font-face {
  font-family: "PixelatedFont";
  src: url("webfont.woff2") format("woff2"), url("webfont.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Use.

```css
body {
  font-family: "PixelatedFont", Menlo, Consolas, Monaco, Liberation Mono, Lucida
      Console, monospace;
}
```

<!--

### spritesheet-html-css

A small playground repeating the exercise with [lua and love2d](#spritesheet-lua-love2d) with HTML and CSS. The animation is introduced as the user scrolls to the footer through the intersection observer API.

The spritesheet is modified to have the character, horizon line and field laid vertically one above the other. The assets share a common width of 64 pixels.

The spritesheet does not include the tile repeated in the background, as I preferred to include the texture with SVG syntax instead.

-->
