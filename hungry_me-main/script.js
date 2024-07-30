const navbarMenu = document.querySelector(".navbar .links")
const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const formPopup = document.querySelector(".form-popup");
const loginSignUp = document.querySelectorAll(".form-box .bottom-link a");
const showContent=document.querySelector(".content");
const showContentBtn=document.querySelector(".content button");

const showMeals=document.querySelector(".container");

//menu button
menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
    showContent.classList.toggle("show-content");
    showMeals.classList.toggle("showMeals");
})
//hide menu
hideMenuBtn.addEventListener("click", () => {
    menuBtn.click()
    
});

//show button
showPopupBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-popup");
});
//hide button
hidePopupBtn.addEventListener("click",()=> {
    showPopupBtn.click();
});

loginSignUp.forEach(link => {
    link.addEventListener("click",(e) => {
        e.preventDefault();
        formPopup.classList[link.id==="signup-link" ? 'add' : 'remove']("show-signup");
    });
});

//show content
showContentBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

