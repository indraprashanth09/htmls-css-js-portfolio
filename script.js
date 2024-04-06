function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function showTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = "I'm still working on some frameworks to be pushed to GitHub.";
    tooltip.style.display = "block";
}

function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}