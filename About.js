let menu = document.querySelector("#menuu")
let close = document.querySelector("#close")
let response = document.querySelector(".response")

let tl = gsap.timeline()
tl.pause()
tl.to(response, {
    right: 0,
    duration: 0.5,


})
tl.from(".response li", {
    x: 100,
    opacity: 0,
    stagger: 0.3
})

// tl.pause()


menu.addEventListener("click", () => {
    tl.play()
})
close.addEventListener("click", () => {
    tl.reverse()
})
gsap.from(".header, .sometext",{
    opacity:0,
    scale:0,
    duration:2
})


gsap.from("#aboutBlogger" , {
    y:-40,
    opacity:0,
    duration:3,
    
})
gsap.from(".leftside" , {
    x:-400,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".leftside",
        start:"top 60%"
    }
})

gsap.from(".rightside" , {
    x:400,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".rightside",
        start:"top 60%"
    }
})
gsap.from(".find, .cardsss" , {
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".find, .cardsss",
        start:"top 60%"
    }
})



let dropBtn = document.querySelector(".drop-btn")

dropBtn.addEventListener("click", (e) => {

    e.preventDefault()

    let dropdownContent = document.querySelector(".response .dropdown-content");


    dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";


})
