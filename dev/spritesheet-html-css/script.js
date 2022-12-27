const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

let stopRate = 100;
let timeout;
const sprites = document.querySelector("#sprites");

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
