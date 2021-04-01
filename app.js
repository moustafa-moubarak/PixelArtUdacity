// Select color input
const colorPicker = document.querySelector("#colorPicker");
// Select size input
const inputHeight = document.querySelector("#inputHeight");
const inputWidth = document.querySelector("#inputWidth");
// When size is submitted by the user, call makeGrid()
const btn = document.querySelector("#btn");
const table = document.querySelector("#pixelCanvas");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  inputHeight.addEventListener('input',function(){
      removeAllChildNodes(table)
  })
  inputWidth.addEventListener('input',function(){
      removeAllChildNodes(table)
  })
  makeGrid(inputHeight.value, inputWidth.value, table);

  const pixels = document.querySelectorAll("td");
  for (let pixel of pixels) {
    pixel.addEventListener("click", function () {
      
      pixel.style.backgroundColor = colorPicker.value;
    });
  }
});

function makeGrid(height, width, parent) {
  // Your code goes here!
  for (let i = 0; i < parseInt(height); i++) {
    const tableRow = document.createElement("tr");
    for (let j = 0; j < parseInt(width); j++) {
      const tableData = document.createElement("td");
      tableRow.append(tableData);
    }
    parent.append(tableRow);
    window.value;
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
