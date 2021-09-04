# Hello World

A page to tinker with Github pages and a pixelated look.

## demo

In the `demo` folder I created a small playground with Lua and Love2D, so to showcase what I want to achieve with the spritesheet. The idea is to repeat a tile, the 4 by 4 square with a light gree color, in the background, and then render the character, horizon line and field at the bottom of the window. Following a specific action, which in the demo means pressing the `down` arrow key, the idea is to then animate the player through its four possible frames, the field in its `y` coordinate.

The demo includes a few Love2D specifc features, but understanding their purpose is more important than learning how the functions work. The quads help to section the spritesheet into its multiple components: player, horizon line, field and background tile. The sprite batch helps to efficiently draw a series of visuals, especially those visuals which do not change over time like the tiles in the background and the repeated horizon line. The stencil helps to hide the field as it moves above the horizon line.

In the website, the player and field could be updated with an animation, on a loop, but also following a specific action. Consider once more a key press, or again the scroll of the window. In this last instance you would fix the visual in the bottom portion and limit the content to the area above.
