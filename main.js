let cells = document.querySelectorAll("[data-cell]");

// this will give each element an event listener
cells.forEach((cell, i) => {
  cell.addEventListener("click", handleclick, { once: true });
});
let choice = false;
var counter = 0;
function handleclick(e) {
  // change the value in that cell
  counter++;
  let cell = e.target;
  if (choice === true) {
    cell.style.backgroundImage = " url('o.png') "
    cell.style.backgroundSize = "100px 100px";

  } else {
    cell.style.backgroundImage = "url('x.png')";
    cell.style.backgroundSize = "100px 100px";
  }
  check("url('x.png')" ,"x ");
  check("url('o.png')", "o ");
  choice = !choice;
}

function check(pick , winner) {
  if (
    cells[0].style.ibackgroundImage === pick &&
    cells[1].style.ibackgroundImage === pick &&
    cells[2].style.ibackgroundImage === pick ||
    cells[3].style.ibackgroundImage === pick &&
    cells[4].style.ibackgroundImage === pick &&
    cells[5].style.ibackgroundImage === pick ||
    cells[6].style.ibackgroundImage === pick &&
    cells[7].style.ibackgroundImage === pick &&
    cells[8].style.ibackgroundImage === pick ||
    cells[0].style.ibackgroundImage === pick &&
    cells[3].style.ibackgroundImage === pick &&
    cells[6].style.ibackgroundImage === pick ||
    cells[1].style.ibackgroundImage === pick &&
    cells[4].style.ibackgroundImage === pick &&
    cells[7].style.ibackgroundImage === pick ||
    cells[2].style.ibackgroundImage === pick &&
    cells[5].style.ibackgroundImage === pick &&
    cells[8].style.ibackgroundImage === pick ||
    cells[0].style.ibackgroundImage === pick &&
    cells[4].style.ibackgroundImage === pick &&
    cells[8].style.ibackgroundImage === pick ||
    cells[2].style.ibackgroundImage === pick &&
    cells[4].style.ibackgroundImage === pick &&
    cells[6].style.ibackgroundImage === pick
  ) {
    alert(winner + " is the winner ");
  } else if (counter >= 9) {
    alert("it's a draw");
  }
}

function clean() {
  window.location.reload();
}

// Try the most easy
// DRY : don't repeat yorself
// check for back practice
// emprove your app
