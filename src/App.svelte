<script>
  import Galaxy from "./Galaxy.svelte";

  const planets = [
    {
      name: "codepen",
      icon: "codepen",
      href: "https://codepen.io/borntofrappe",
      description: "Explore the many demos I created to learn and master several web technologies.",
    },
    {
      name: "freecodecamp",
      icon: "freecodecamp",
      href: "https://www.freecodecamp.org/borntofrappe",
      description: "Admire the certifications I earned while starting as a web developer.",
    },
    {
      name: "twitter",
      icon: "twitter",
      href: "https://twitter.com/borntofrappe",
      description: "Be sure to follow me @borntofrappe",
    },
    {
      name: "github",
      icon: "github",
      href: "https://github.com/borntofrappe",
      description: "Double check my history, fork and improve my code.",
    },
    {
      name: "borntofrappe",
      icon: "rocket",
      href: "/",
      description: "I'm working on a larger website, and hopefully I'll add it to this rotation soon enough.",
    },
  ];
</script>

<h1 class="visually-hidden">borntofrappe</h1>
<p class="visually-hidden">Welcome to the hub of a front-end web developer</p>
<Galaxy {planets} />
