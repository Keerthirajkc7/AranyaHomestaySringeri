// =========================
// Mobile Navigation
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// =========================
// Gallery Lightbox
// =========================

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span id="close-lightbox">&times;</span>
    <img id="lightbox-img">
`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-lightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

// =========================
// Scroll Animation
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".room-card,.amenity,.contact-card,.gallery-grid img")
.forEach(el=>observer.observe(el));

// =========================
// Sticky Navbar Background
// =========================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>80){

        header.style.background="#173b25";

    }

    else{

        header.style.background="rgba(0,0,0,.45)";

    }

});
