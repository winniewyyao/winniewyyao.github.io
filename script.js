function myFunction() {
  var menu = document.getElementById("myLinks");
  var hamburger = document.querySelector(".hamburger-icon");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    hamburger.classList.remove("active"); // remove active color
  } else {
    menu.style.display = "block";
    hamburger.classList.add("active");    // add active color
  }
}

// Close dropdown if clicked outside
document.addEventListener("click", function(event) {
  var menu = document.getElementById("myLinks");
  var hamburger = document.querySelector(".hamburger-icon");

  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.style.display = "none";
    hamburger.classList.remove("active"); // remove active color
  }
});