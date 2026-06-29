// =====================================
// UrbanLeaf Landscape Services
// script.js
// =====================================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// =====================================
// Sticky Navbar
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";
    }

});

// =====================================
// Smooth Scrolling
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

        navLinks.classList.remove("active");

    });

});

// =====================================
// Counter Animation
// =====================================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 120;

            const update = ()=>{

                if(count < target){

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            }

            update();

            observer.unobserve(counter);

        }

    });

},{threshold:0.5});

counters.forEach(counter=>{

    observer.observe(counter);

});

// =====================================
// Scroll To Top Button
// =====================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =====================================
// Contact Form Validation
// =====================================

const form = document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name===""){

        alert("Please enter your name.");

        return;

    }

    if(!/^[6-9]\d{9}$/.test(phone)){

        alert("Please enter a valid 10-digit mobile number.");

        return;

    }

    if(!/^\S+@\S+\.\S+$/.test(email)){

        alert("Please enter a valid email address.");

        return;

    }

    alert("Thank you! Your request has been submitted successfully.");

    form.reset();

});

// =====================================
// Reveal Animation
// =====================================

const reveals = document.querySelectorAll(".service-card,.stat-card,#about,#contact");

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.15});

reveals.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition=".7s";

    revealObserver.observe(item);

});

// =====================================
// Footer Year
// =====================================

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}
