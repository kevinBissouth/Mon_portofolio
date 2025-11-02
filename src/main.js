// ======================= le menu hamburger ======================= //
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const closeIcon = document.getElementById("nav-close");

navLink.forEach((link) => (
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden")
    })
))

closeIcon.addEventListener("click", () => {
    navMenu.classList.add("hidden")
})

hamburger.addEventListener("click", () => {
        navMenu.classList.remove("hidden")
})

// ============================================== TABS =========================================== //
let tabs = document.querySelectorAll('.tab');
let indicator = document.querySelector(".indicator");
indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";
const all = document.querySelectorAll('.work_card');
const uis = document.querySelectorAll('.ui');
const apps = document.querySelectorAll('.app');
const brandings = document.querySelectorAll('.branding');

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        indicator.style.width = tab.getBoundingClientRect().widht + "px";
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";


        const tabval = tab.getAttribute("data-tab");
        all.forEach(item => {
            item.style.display = "none"
        });
        if(tabval == "ui"){
          uis.forEach(item => {
            item.style.display = "block"
            });  
        }else if(tabval == "app"){
          apps.forEach(item => {
            item.style.display = "block"
            });  
        }else if(tabval == "branding"){
          brandings.forEach(item => {
            item.style.display = "block"
            });  
        }else{
          all.forEach(item => {
            item.style.display = "block"
            });  
        }
    })
})
// change background heder //
const scrollHeader = () => {
    const navbar = document.getElementById("navbar");

    if(this.scrollY >= 250){
        navbar.classList.add("bg-[var(--primaryColor)]");
        
    }else {
        navbar.classList.remove("bg-[var(--primaryColor)]");
    }
}


window.addEventListener("scroll", scrollHeader)

// show scroll up //
const scrollup = () => {
    const scrollupBtn = document.getElementById('scroll-up');

    if(this.scrollY >= 250) {
        scrollupBtn.classList.remove("-bottom-1/2");
        scrollupBtn.classList.add("bottom-4");
    }else {
        scrollupBtn.classList.add("-bottom-1/2");
        scrollupBtn.classList.remove("bottom-4");
    }
};

window.addEventListener("scroll", scrollup)

// sroll section active link //
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    
    let current = "hero";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");

        }
    })

    navLinks.forEach(item => {
        item.classList.remove('active');
        if(item.href.includes(current)){
            item.classList.add('active');
        }
    })
    
}
window.addEventListener("scroll", activeLink);

// scrool Reveal Animation //
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
});

sr.reveal(".hero__image");
sr.reveal(".hero__content", {origin: "bottom"});
sr.reveal(".hero__footer", {origin: "bottom", delay:1200 });

sr.reveal(".service__top", {origin: "bottom"});
sr.reveal(".service__item", {origin: "bottom", interval: 300 });

sr.reveal(".recent_works__top", {origin: "bottom"});
sr.reveal(".recent_works_tabs", {origin: "bottom", delay:1200 });