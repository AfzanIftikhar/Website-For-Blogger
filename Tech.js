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


let dropBtn = document.querySelector(".drop-btn")

dropBtn.addEventListener("click", (e) => {

    e.preventDefault()

    let dropdownContent = document.querySelector(".response .dropdown-content");


    dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";


})
let readmore = document.querySelectorAll(".readMore")
// let text = document.querySelector(".text")


readmore.forEach((arr) => {


  arr.addEventListener("click" , () => {

    let text = arr.closest(".cards").querySelector(".text");


    text.style.display = text.style.display === "block" ? "none" : "block"
    readmore.textContent = text.style.display === "block" ? "Show less<<" : "Show More>>"

})

})

gsap.from(".Main" , {
    x:400,
    opacity:0,
    duration:2
})
