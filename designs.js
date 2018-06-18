// Theodore Sawyer, FEND - LAB 2.22: 'Pixel Art Maker' / designs.js / 06.18.18

// setup variables for canvas element,height,width
const canvas = document.getElementById('pixelCanvas');
let init_h = $("#inputHeight");
let init_w = $("#inputWidth");

// event listener that fires when Submit button is clicked
$('#inputSubmit').click(function (event) {
    event.preventDefault();
    makeGrid();
});

let color = $("#colorPicker");

// creates grid pattern makeGrid is called and button is clicked
function makeGrid() {
    canvas.innerHTML = '';
    let height = init_h.val();
    let width = init_w.val();

    // function fills cell colors when clicked
    let addEvent = function (cell) {
        cell.addEventListener('click', function () {
            cell.style.backgroundColor = color.val();
        });
    }

    // event listener fires when cell is clicked and calls addEvent function to change corresponding cell color
    for (let x = 0; x < height; x++) {
        let row = canvas.insertRow(x);

        for (let y = 0; y < width; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}