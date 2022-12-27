const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

const sprites = document.querySelector("#sprites");
let stopRate = 100;
let timeout = null;

const step = () => {
  clearTimeout(timeout);
  sprites.classList.add("step");

  timeout = setTimeout(() => {
    clearInterval(timeout);
    sprites.classList.remove("step");
  }, stopRate);
};

if (!prefersReducedMotion.matches) {
  window.addEventListener("scroll", step);
}

prefersReducedMotion.addEventListener("change", ({ matches }) => {
  if (matches) {
    window.removeEventListener("scroll", step);
  } else {
    window.addEventListener("scroll", step);
  }
});
