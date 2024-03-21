function planTrip() {
  let name = prompt("What is your name?");
  let address = prompt("What is your email address?");
  let age = prompt("How old are you?");

  if (age < 18) {
    alert("Sorry" + " " + name + " ," + "You cannot plan a trip on your own😥");
  } else {
    alert("Thank you" + " " + name + " ," + "we'll be in touch!");
  }
}
let planTripButton = document.querySelector("button");
planTripButton.addEventListener("click", planTrip);
