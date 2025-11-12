function myFunction() {
  var menu = document.getElementById("myLinks");
  var hamburger = document.querySelector(".hamburger-icon i"); // target the <i> itself
  var iconWrapper = document.querySelector(".hamburger-icon");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    iconWrapper.classList.remove("active");
    hamburger.classList.remove("fa-xmark");
    hamburger.classList.add("fa-bars");
  } else {
    menu.style.display = "block";
    iconWrapper.classList.add("active");
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-xmark");
  }
}

// Close dropdown if clicked outside
document.addEventListener("click", function(event) {
  var menu = document.getElementById("myLinks");
  var iconWrapper = document.querySelector(".hamburger-icon");
  var hamburger = document.querySelector(".hamburger-icon i");

  if (!menu.contains(event.target) && !iconWrapper.contains(event.target)) {
    menu.style.display = "none";
    iconWrapper.classList.remove("active");
    hamburger.classList.remove("fa-xmark");
    hamburger.classList.add("fa-bars");
  }
});
