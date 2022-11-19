let count = 0
let guestCount = 0

let numEl = document.getElementById("num1-el")
let guestEl = document.getElementById("guest-el")



function addOne() {
  document.getElementById("num1-el").textContent = count += 1

}

function addTwo() {
  document.getElementById("num1-el").textContent = count += 2

}

function addThree() {
  document.getElementById("num1-el").textContent = count += 3
}

// ****GUEST****

function guestOne() {
  document.getElementById("guest-el").textContent = guestCount += 1
}

function guestTwo() {
  document.getElementById("guest-el").textContent = guestCount += 2
}

function guestThree() {
  document.getElementById("guest-el").textContent = guestCount += 3
}
