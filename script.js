document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView 
({
    behavior: 'smooth'
});        
    });
});
/*
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Dark Mode";
    toggleBtn.classList.add("btn-small", "btn-secondary", "m-2");
  document.body.appendChild(toggleBtn);
if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}
});
console.log("Dark Mode Loaded.");
});
*/

document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("themeToggle");
if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
}
toggleSwitch.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}
});
console.log("Dark Mode Loaded.");
});

function showImage(latteType) {
   let images = document.querySelectorAll(".image-container img");
   images.forEach(img => img.style.display = "none");
   document.getElementById(latteType).style.display = "block";
}
