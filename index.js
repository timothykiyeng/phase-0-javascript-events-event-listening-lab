function addingEventListener() {
  const input = document.getElementById("button");
  input.addEventListener("click", clickEvent);
}

function clickEvent() {
  alert("I was clicked");
}

addingEventListener();
