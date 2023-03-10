// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });

// const hidden = document.querySelectorAll(".hidden");
// hidden.forEach((el) => observer.observe(el));

const tabs = document.querySelectorAll(".tab");
const pannels = document.querySelectorAll(".pannel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

btn.addEventListener("click", toggleMenue);
function toggleMenue() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  if (menu.classList.contains("flex")) {
    
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  }
}

tabs.forEach((tab) => tab.addEventListener("click", ontab));
function ontab(e) {
  tabs.forEach((tab) => {
    // deactivate the tab
    tab.children[0].classList.remove("border-softRed", "border-b-4");
  });

  // deactivate  the pannels
  pannels.forEach((pannel) => pannel.classList.add("hidden"));
  //   activate the pannel and the tab based on the target attribute
  e.target.classList.add("border-softRed", "border-b-4");
  let pannel = e.target.getAttribute("data-target");
  document
    .getElementById("pannel")
    .getElementsByClassName(pannel)[0]
    .classList.remove("hidden");
}
