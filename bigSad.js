'use strict'

let searchInput = document.getElementById("search-input");
let searchBox = document.getElementById("search-box");

function setBoxShadow(){
  searchBox.style.boxShadow = "0 1px 6px 0 rgba(32,33,36,0.28)";
}

function removeBoxShadow(){
  searchBox.style.boxShadow = "";
}
// searchInput.addEventListener("focus",setBoxShadow);

