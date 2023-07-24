

/**************************navigation menu*************************/
(() => {

    const hamburgerBtn = document.querySelector(".hamburger-btn"),
        navManu = document.querySelector(".nav-menu"),
        closeNavBtn = navManu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu() {
        navManu.classList.add("open");
    }
    function hideNavMenu() {
        navManu.classList.remove("open");
        fadeOutEffect();
    }
    function fadeOutEffect() {
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300)
    }

    //attach an event handler to document
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains('link-item')) {
            /*******make sure event.target.hash a value before overridding defult
            behavior*********/
            if (event.target.hash !== "") {
                //prevent default anchor click behavior
                event.preventDefault();
                const hash = event.target.hash;
                //deactivate existing active 'section'
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                //active new section
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                //deactivate existing active navigatuin menu 'like-item'
                navManu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navManu.querySelector(".active").classList.remove("active", "inner-shadow");
                //if clicked 'link-item is contained within the navigation menu'
                if (navManu.classList.contains("open")) {
                    //activate new navigation menu 'link-item'
                    event.target.classList.add("active", "inner-shadow");
                    event.target.classList.remove("outer-shadow", "hover-in-shadow");
                    //hide navigation menu
                    hideNavMenu();
                }
                else {
                    let navItems = navManu.querySelectorAll(".link-item");
                    navItems.forEach((item) => {
                        if (hash === item.hash) {
                            //activate new navigation menu 'link-item'
                            item.classList.add("active", "inner-shadow");
                            item.classList.remove("outer-shadow", "hover-in-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                //add hash (#) to url
                window.location.hash = hash;
            }
        }

    })
})();
/********************* about section tabs***********************/

(() => {
    const aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        /*if event.target contains 'tab-item' class and not 
        contains 'active class'*/
        if (event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")) {
            const target = event.target.getAttribute("data-target");
            //deactivete existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            //activate new 'tab-item'
            event.target.classList.add("active", "outer-shadow");
            //deactivete existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            //activate new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();

/**********************hide all section except active******************/
// (() => {

//     const sections = document.querySelectorAll(".section");
//     sections.forEach((section) => {
//         if (!section.classList.contains("active")) {
//             section.classList.add("hide");
//         }
//     })
// })();

window.addEventListener("load",() =>{
    //preloader 
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none"; 
    },600)
})