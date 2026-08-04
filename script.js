document.addEventListener("DOMContentLoaded", function(){
    function toggleNav(){
        const menuBtn = document.querySelector(".menu-btn");
        const navUl = document.querySelector(".nav-ul");

        menuBtn.addEventListener("click", ()=>{
            if(navUl.classList.contains("active")){
                navUl.classList.remove("active")
            }else{
                navUl.classList.add("active")
            }
        })
    }
    toggleNav();
})