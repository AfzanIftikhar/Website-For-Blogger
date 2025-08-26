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

gsap.from("form .form-group",{
    opacity:0,
    x:200,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:"form .form-group",
        start:"top 60%"
    }

})


gsap.from(".contactform1" , {
    x:-400,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".contactform1",
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
