// inspiration for the responsive nav bar and hamburger icon inspired by https://github.com/JurkiewiczCraig/a3web

// Function to make navigation bar responsive, change to hamburger when screen size reduces
function responsiveNav(y) {
    y.classList.toggle("change");
    let x = document.getElementById("myNav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
