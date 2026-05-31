import "./styles.css";
import "./homepage.js";
import pageLoad from "./homepage.js";
pageLoad();
import menuPage from "./menu.js";
import aboutPage from "./about.js";
let homeButton = document.querySelector(".home");
let menuButton = document.querySelector(".menu");
let aboutButton = document.querySelector(".about");
aboutButton.addEventListener("click", aboutPage);
homeButton.addEventListener("click", pageLoad);
menuButton.addEventListener("click", menuPage);

