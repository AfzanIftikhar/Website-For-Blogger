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

let dropBtn = document.querySelector(".drop-btn")

dropBtn.addEventListener("click", (e) => {

    e.preventDefault()

    let dropdownContent = document.querySelector(".response .dropdown-content");


    dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";


})
window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
        gsap.to(".brandsLogo", {
            transform: "translateX(-200%)",
            repeat: -1,
            ease: "none",
            duration: 6
        })
    }
    else {
        gsap.to(".brandsLogo", {
            transform: "translateX(0%)",
            repeat: -1,
            ease: "none",
            duration: 6
        })

    }
})
gsap.from(".brands h2", {
    scale: 0,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".brands h2",
        start: "top 60%"
    }


})
