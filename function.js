document.getElementById("enviar_mail").addEventListener("mouseover", mouseOver);

function mouseOver() {
    document.getElementById("enviar_mail").style.color = "purple";
  }

document.getElementById("enviar_mail").addEventListener("mouseout", mouseOut);

function mouseOut() {
  document.getElementById("enviar_mail").style.color = "black";
}