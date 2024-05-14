let all = document.querySelector("#liAll");
let dev = document.querySelector("#liDevelopment");

dev.addEventListener("click", () => {
  all.classList.remove("diff");
  dev.classList.add("diff");
});

all.addEventListener("click", () => {
  dev.classList.remove("diff");
  all.classList.add("diff");
});