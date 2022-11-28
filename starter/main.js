




var hamburgerdiv = document.querySelector(".hamburger")
var linkholder = document.querySelector(".link-holder")
var mybackdrop = document.querySelector(".backdrop")

function dosomething() {
          hamburgerdiv.classList.toggle("showbuger")

          linkholder.classList.toggle("show-linkholder")
          mybackdrop.classList.toggle("showbackdrop")
}