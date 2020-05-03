<script>
  import { fade, fly } from 'svelte/transition';
  import getIcon from "./icons.js";

  let isAnimated = false;
  let hint = "";

  export let planets;

  const size = 500;
  const iconSize = 100;

  const { length } = planets;

  const round = length + 2;
  const rounds = length + 2;
  const particles = Array(rounds)
    .fill("")
    .map((v, indexRounds) => {
      const translate = (size / 2.25 / rounds) * (indexRounds + 1);
      const scale = (indexRounds + 1) ** 0.2;

      const numberRounds = round * (indexRounds + 1);
      const rotation = Array(numberRounds)
        .fill("")
        .map((v, indexRound) => (round % 2 == 0 ? 360 / round / 2 + (360 / numberRounds) * indexRound : (360 / numberRounds) * indexRound));

      return {
        translate,
        scale,
        rotation,
      };
    });
</script>

<nav>
  <!-- wrapping SVG -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-{size / 2} -{size / 2} {size} {size}" width="{size}" height="{size}">
    <defs>
      <!-- path elements describing the circles
      path-c and path-cc are used to map the text around the smaller `path` element
      the difference between the two boils down to the clockwise, counter-clockwise direction
      -->
      <path id="path" d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" />
      <path id="path-c" d="M 0 40 a 40 40 0 0 1 0 -80 40 40 0 0 1 0 80" />
      <path id="path-cc" d="M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94" />
      <path id="path-hint" d="M -70 0 a 70 70 0 0 0 140 0" />

      <!-- mask to show the text only as it exceeds the path element encircling the icons -->
      <mask id="mask-text">
        <!-- <rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" /> -->
        <use transform="scale(2)" href="#path" fill="hsl(0, 0%, 100%)" />
        <use href="#path" fill="hsl(0, 0%, 0%)" />
      </mask>

      <!-- mask to hide the particles that would coincide with the icons -->
      <mask id="mask-icons">
        <rect x="-{size / 2}" y="-{size / 2}" width="{size}" height="{size}" fill="hsl(0, 0%, 100%)" />
        <circle r="46" fill="hsl(0, 0%, 0%)" />

        {#each planets as planet, i}
        <g transform="rotate({360 / planets.length * i}) translate(0 -{Math.floor(size / 3)}) rotate({360 / planets.length * i * -1})">
          <use href="#path" transform="scale(1.4)" fill="hsl(0, 0%, 0%)" />
        </g>
        {/each}
      </mask>
    </defs>

    <!-- group describing the particles as a backdrop -->
    <g mask="url(#mask-icons)" opacity="0.3">
      <g class="loaded">
        {#each particles as { translate, scale, rotation}} {#each rotation as rotate}
        <g transform="rotate({rotate}) translate(0 {translate}) rotate(-{rotate})">
          <circle r="1" transform="scale({scale})" />
        </g>
        {/each} {/each}
      </g>
    </g>

    <g class="loading">
      <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
        <circle r="46" />
        <g>
          <path id="accent" d="M -10 -15 q 0 -8 -8 -10" stroke-dasharray="14.01 18.5" stroke-dashoffset="-4.5" />
          <path id="b" d="M -10 -15 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36" stroke-dasharray="114.2 146.28" stroke-dashoffset="-9.145" />
        </g>
      </g>
    </g>

    {#if isAnimated && hint}
      <g in:fly="{{delay: 350}}" out:fade>
        <text fill="currentColor" font-family="monospace" font-weight="400" letter-spacing="1" text-anchor="middle" font-size="14">
          <textPath href="#path-hint" startOffset="50%" text-anchor="middle">
            {hint}
          </textPath>
        </text>
      </g>
    {/if}

    <!-- group wrapping the different icons
    by translating the icons away from the center and scaling this group, you show them as if moving from the center
    -->
    <g class="loaded" on:animationend={() => { isAnimated = true; }}>
      <!-- wrap each icon in an anchor link to make the shape click-able and focus-able -->
      {#each planets as {name, icon, href, description}, i}
      <g transform="rotate({360 / planets.length * i}) translate(0 -{Math.floor(size / 3)}) rotate({360 / planets.length * i * -1})">
        <a {href} aria-labelledby="title-{name}" aria-describedby="description-{name}" on:mouseenter="{() => { hint = description; }}" on:focus="{() => { hint = description; }}" on:mouseleave="{() => { hint = ''; }}" on:blur="{() => { hint = ''; }}">
          <title id="title-{name}">{name}</title>
          <description id="description-{name}">{description}</description>
          <g transform="translate(-{size / 6} -{size / 6})">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-{iconSize / 2} -{iconSize / 2} {iconSize} {iconSize}" width="{size / 3}" height="{size / 3}">
              <g transform="scale(0.9)">
                <g style="pointer-events: none;">
                  <use href="#path" stroke="currentColor" stroke-width="6" fill="none" />
                  <!-- rotate the text around the center -->
                  <g transform="rotate({360 / planets.length * i})" mask="url(#mask-text)">
                    <g class="text">
                      <text fill="currentColor" font-family="monospace" font-weight="bold" letter-spacing="1" text-anchor="middle" font-size="12">
                        <textPath href="#{360 / planets.length * i > 90 && 360 / planets.length * i < 270 ? 'path-cc' : 'path-c'}" startOffset="50%">
                          {name}
                        </textPath>
                      </text>
                    </g>
                  </g>

                  <!-- re-scale the icon inside the wrapping path element -->
                  <g transform="translate(-{iconSize / 6} -{iconSize / 6})">
                    {@html getIcon(icon, iconSize / 3)}
                  </g>
                </g>

                <!-- overlapping circle to expand the click area -->
                <circle r="50" opacity="0" />
              </g>
            </svg>
          </g>
        </a>
      </g>
      {/each}
    </g>
  </svg>
</nav>

<style>
  nav {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url("data:image/svg+xml,%3Csvg opacity='0.04' xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 10 10' width='20' height='20'%3E%3Cg stroke='none' fill='hsl(220, 100%25, 8%25)'%3E%3Ccircle r='1' /%3E%3Ccircle r='1' cx='5' cy='-5' /%3E%3Ccircle r='1' cx='5' cy='5' /%3E%3Ccircle r='1' cx='-5' cy='5' /%3E%3Ccircle r='1' cx='-5' cy='-5' /%3E%3C/g%3E%3C/svg%3E");
    background-size: 20px;
    background-position: -5px 5px;

    position: relative;
    --transition-duration: 0.35s;
    --transition-timing-function: var(--ease-in-out-sine);

    --main-animation-duration: 4.5s;
    --main-animation-delay: 0.35s;
    --support-animation-duration: 0.6s;
    --support-animation-delay: var(--main-animation-duration);
  }

  nav::before,
  nav::after {
    content: "";
    background: hsl(215, 22%, 5%);
    background: var(--grey-0);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-50 -50 100 100' width='20' height='20'%3E%3Cg opacity='0.4'%3E%3Cg fill='currentColor' stroke='none'%3E%3Ccircle r='10' /%3E%3Ccircle r='10' transform='translate(50 -50)' /%3E%3Ccircle r='10' transform='translate(50 50)' /%3E%3Ccircle r='10' transform='translate(-50 50)' /%3E%3Ccircle r='10' transform='translate(-50 -50)' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: 20px;
    background-position: 5px 5px;
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='25 -20 100 40' width='100' height='40'%3E%3Cg fill='currentColor' stroke='none'%3E%3Cpath d='M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0' /%3E%3C/g%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='25 -20 100 40' width='100' height='40'%3E%3Cg fill='currentColor' stroke='none'%3E%3Cpath d='M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0' /%3E%3C/g%3E%3C/svg%3E");
    -webkit-mask-position: 50% 0;
    mask-position: 50% 0;
    position: absolute;
    left: 0%;
    width: 100%;
    height: 20px;
  }

  nav::before {
    top: 0%;
    transform: scaleY(-1);
  }
  nav::after {
    bottom: 0%;
  }
  svg {
    max-width: 38rem;
    width: 100vmin;
    height: auto;
    display: block;
  }
  svg text {
    font-family: "Source Code Pro", monospace;
    font-weight: 600;
  }

  /* for the hover/focus transition, update the color and scale of the icon */
  a {
    transform: scale(0.85);
    transition: color 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95), transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: color var(--transition-duration) var(--transition-timing-function), transform var(--transition-duration) var(--ease-in-out-back);
    outline: none;
  }
  a:hover,
  a:focus {
    transform: scale(1);
  }
  /* scale the group wrapping the text element to also show the label on hover/focus */
  a .text {
    transform: scale(0.5);
    transition: transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: transform var(--transition-duration) var(--ease-out-back);
  }
  a:hover .text,
  a:focus .text {
    transform: scale(1);
  }

  /* animation properties */
  svg .loading {
    animation: transform-icon 4.5s 0.35s cubic-bezier(0.68, -0.5, 0.265, 1.55);
    animation: transform-icon var(--main-animation-duration) var(--main-animation-delay) var(--ease-in-out-back) both;
  }

  svg .loading #logo {
    animation: transform-logo 4.5s 0.35s cubic-bezier(0.68, -0.5, 0.265, 1.55);
    animation: transform-logo var(--main-animation-duration) var(--main-animation-delay) var(--ease-in-out-back) both;
  }

  svg .loading #b {
    animation: stroke-b 4.5s 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    animation: stroke-b var(--main-animation-duration) var(--main-animation-delay) var(--ease-in-out-sine) both;
  }

  svg .loading #accent {
    animation: stroke-accent 4.5s 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
    animation: stroke-accent var(--main-animation-duration) var(--main-animation-delay) var(--ease-out-cubic) both;
  }

  svg .loaded {
    animation: transform-icons 0.6s 4.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    animation: transform-icons var(--support-animation-duration) var(--support-animation-delay) var(--ease-out-back) both;
  }

  @keyframes transform-icons {
    0%,
    20% {
      transform: scale(0);
      opacity: 0;
      visibility: hidden;
    }
    100% {
      transform: scale(1);
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes transform-icon {
    90% {
      transform: scale(0.8) rotate(20deg);
    }
  }

  @keyframes transform-logo {
    90% {
      transform: scale(0.6) rotate(5deg);
    }
  }

  @keyframes stroke-b {
    0%,
    20% {
      stroke-dashoffset: 0;
    }
    92% {
      stroke-dashoffset: 114.2;
    }
    95%,
    100% {
      stroke-dashoffset: -9.142;
    }
  }

  @keyframes stroke-accent {
    0%,
    94.5% {
      stroke-dashoffset: 14.01;
    }
    98%,
    100% {
      stroke-dashoffset: -4.5;
    }
  }

  /* add a subtle fade in for prefers-reduced-motion */
  /* uncomment media query to have the more complex animation in place */
  @media screen and (prefers-reduced-motion: reduce) {
    svg .loading #logo,
    svg .loading #b,
    svg .loading #accent {
      animation: none;
    }
    svg .loading,
    svg .loaded {
      animation: fade-in 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) both;
      animation: fade-in var(--support-animation-duration) var(--ease-in-out-sine) both;
    }

    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
</style>
