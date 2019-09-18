function expander(id){
  var contclicked = document.getElementById(id)
  var hidetext = contclicked.getElementsByTagName("p");
//    contclicked.style.display = "block"
   // hidetext[0].style.visibility = "visible"
    // console.log()
//    var childelems = contclicked.getElementById("hey");
  if(contclicked.style.height == "80vh"){
    contclicked.style.height = "10vh";
    contclicked.style.background = "#bbb";
    hidetext[0].style.visibility = "hidden"
    
  }
  else {
    // console.log(childelems)
    contclicked.style.height = "80vh";
    contclicked.style.background = "blue";
    hidetext[0].style.visibility = "visible"
  }
}