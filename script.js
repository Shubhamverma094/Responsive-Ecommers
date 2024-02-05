let icon = document.querySelector(".icon");

let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
    ul.classList.toggle("showdata");

    if (ul.className == "showdata") {
        document.getElementById("bar").className = "fa-solid fa-xmark";

    } else {
        document.getElementById("bar").className = "fa-solid fa-bars";
    }

})


// Navbar----

let shops = document.getElementById("shops");

let riviews = document.getElementById("riviews");

let blogs = document.getElementById("blogs");

let contacts = document.getElementById("contacts");



shops.addEventListener("click", ()=>{


    shops.style.color="#f00";
    riviews.style.color="#fff";
    blogs.style.color="#fff";
    contacts.style.color="#fff";
});

riviews.addEventListener("click", ()=>{
    
    shops.style.color="#fff";
    riviews.style.color="#f00";
    blogs.style.color="#fff";
    contacts.style.color="#fff";
});

blogs.addEventListener("click", ()=>{
    
    shops.style.color="#fff";
    riviews.style.color="#fff";
    blogs.style.color="#f00";
    contacts.style.color="#fff";
});

contacts.addEventListener("click", ()=>{

    
    shops.style.color="#fff";
    riviews.style.color="#fff";
    blogs.style.color="#fff";
    contacts.style.color="#f00";

})


// Iteam Sec------


// let iteam = document.querySelector(".iteam-sec");
// let 
