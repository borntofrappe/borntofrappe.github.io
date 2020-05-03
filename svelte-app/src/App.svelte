<script>
  import Galaxy from "./Galaxy.svelte";

  const planets = [
    {
      name: "codepen",
      icon: "codepen",
      href: "https://codepen.io/borntofrappe",
      description: "Marvel at the many demos",
    },
    {
      name: "freecodecamp",
      icon: "freecodecamp",
      href: "https://www.freecodecamp.org/borntofrappe",
      description: "Admire certifications",
    },
    {
      name: "twitter",
      icon: "twitter",
      href: "https://twitter.com/borntofrappe",
      description: "Be sure to follow me",
    },
    {
      name: "github",
      icon: "github",
      href: "https://github.com/borntofrappe",
      description: "Review, fork and improve",
    },
    {
      name: "borntofrappe",
      icon: "rocket",
      href: "https://github.com/borntofrappe/borntofrappe.github.io",
      description: "Just getting started",
    },
  ];
</script>

<h1 class="visually-hidden">borntofrappe</h1>
<p class="visually-hidden">Welcome to the hub of a front-end web developer</p>
<Galaxy {planets} />
