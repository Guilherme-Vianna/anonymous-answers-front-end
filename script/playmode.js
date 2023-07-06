const playButton = document.getElementById("play");
playButton.addEventListener("click", Play);

function Play() {
  console.log("Vamos responder");
  window.location.replace("answer.html");
}
