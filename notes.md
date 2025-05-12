<!-- Project Title -->
<h1> Feline Beans </h1>
<!-- Description -->
<h2> A cat-themed cafe website with cozy and cute menus. </h2>
<h3> Technologies Used: </h3>
 <ul>
   <li> Html </li>
   <li> Css </li>
   <li> Javascript </li>
   <li> Bootstrap </li> 
 </ul>
<h3> Features: </h3>
 <ul type = "square"> 
    <li> Home page with a welcome message. </li> 
    <li> Menu sections with snacks and drinks. </li>
    <li> Contact form. </li>
    <li> Mobile Responsiveness
    <li> Smooth scrolling and Light/Dark theme switch using Javascript. </li>
 </ul>
<h3> Challenges & Solutions: </h3> 
 <table border = 3>
   <tr> 
      <th> Issue </th>
      <th> Solution </th> 
   </tr> 
   <tr>
      <td> The navigation bar was not working smoothly. </td>
      <td> Used <i>'Javascript EventListener'</i> to fix smooth scrolling. </td>
   </tr>
   <tr>
      <td> The Light/Dark theme switch is not working properly. </td>
      <td> Used <i>'Javascript EventListener'</i> to fix it. </td>
   </tr>
 </table>
<h3> Important Code Snippet: </h3>
  <p> Smooth Scrolling : </p>
   <pre style = "color: yellow";> 
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView 
({
    behavior: 'smooth'
});        
    });
});
   </pre>
  <p> Light/Dark switch : </p>
   <pre style = "color: yellow;">
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
   </pre> 
<h3> To-Do List: </h3>
<ul>
  <li> Add Animations. </li>
  <li> Improve the Mobile Version. </li>
</ul>