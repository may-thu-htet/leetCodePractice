"use-strict";
let listItem = 0;
let travelMode;
function addItem() {
  if (listItem >= 4) {
    listItem = 0;
  }

  switch (listItem) {
    case 0:
      travelMode = "Planes";
      break;
    case 1:
      travelMode = "Trains";
      break;
    case 2:
      travelMode = "Automobiles";
      break;
    case 3:
      travelMode = "Boats";
      break;
  }

  listItem++;
  let newNode = document.createElement("li");
  let textNode = document.createTextNode(travelMode);
  newNode.appendChild(textNode);

  document.getElementById("transportations").appendChild(newNode);
}

function removeItem() {
  let list = document.getElementById("transportations");
  list.removeChild(list.childNodes[0]);
}
