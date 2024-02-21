import { about } from "./about.js";
import { renderProjects } from "./projects.js";

const routes = {
    "home":"home.html",
    "": "home.html",
    'about' : "about.html",
    'contact' : "contact.html",
    'project' : "project.html"
    }
    

const loadPage = async(url, domObj) => {
    console.log(url,url.length)
    const response = await fetch(url);
    const html = await response.text();
    domObj.innerHTML = html;
    if(url=='about.html'){
        about()
    }
    if(url=='project.html'){
        console.log('oké')
        renderProjects()
    }
    
}

let obj = document.querySelector(".container");
loadPage("home.html", obj);

window.addEventListener("hashchange", () => {
    console.log(window.location.hash);
    navigate();
})

function navigate() {
    let hash = window.location.hash.substring(2);
    console.log(hash);
    let page = routes[hash] || '404.html'
    loadPage(page,obj);
}