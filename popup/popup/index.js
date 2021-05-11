
// Função usada no popup.html

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active")
  //document.getElementById("popup-content").style.transform = "translate(-50%, -50%) scale(1)"
}

// ---------------------- //

// funções usadas no popup2.html

function showPopup() {
  document.getElementById("popup").style.display = "block"
}

function hidePopup() {
  document.getElementById("popup").style.display = "none"
}

function removeStyleAttribute() {
  document.getElementById("popup").removeAttribute("style")
}

// function togglePopup_2() {
//   display = document.getElementById("popup-1").style.display
//   console.log("Display: " + display)

//   if (display === "none") {
//     diplay = "block"
//   }

//   if (display === "block") {
//     display = "none"
//   }
// }
