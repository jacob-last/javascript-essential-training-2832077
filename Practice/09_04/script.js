/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

let squares = document.querySelectorAll(".cell");

squares.forEach((square) => {
  square.setAttribute("colourid", 0);
  square.classList.add("colour0");
  square.addEventListener("click", (event) => {
    let colourID = square.getAttribute("colourid");
    square.classList.remove("colour" + colourID);

    if (colourID == 7) {
      colourID = -1;
    }

    square.setAttribute("colourID", Number(colourID) + 1);
    square.classList.add("colour" + (Number(colourID) + 1));
  });

  square.addEventListener("mouseenter", (event) => {
    square.classList.add("border");
  });

  square.addEventListener("mouseleave", (event) => {
    square.classList.remove("border");
  });
});
