function expander(id){
  var contclicked = document.getElementById(id)
  var blogtext = contclicked.getElementsByTagName("p");
  var titletext = contclicked.getElementsByTagName("div");
  var intitletext = contclicked.getElementsByTagName("h2");
  var image = contclicked.getElementsByTagName("img");

//    updates after click
console.log(titletext)
  if(contclicked.style.height == "100vh"){
    contclicked.style.height = "20vh";
    contclicked.style.background = "#bbb";
    image[0].style.width = "5rem";
    blogtext[0].style.visibility = "hidden";
    titletext[0].style.visibility = "visible";
    intitletext[0].style.visibility = "hidden";
    titletext[0].style.color = "green";
  }

//   updates onclick
  else {
    // console.log(childelems)
    contclicked.style.height = "100vh";
    contclicked.style.background = "blue";
    image[0].style.width = "25vw";
    blogtext[0].style.visibility = "visible";
    intitletext[0].style.visibility = "visible";
    titletext[0].style.color = "red";
    titletext[0].style.visibility = "hidden";
    contclicked.scrollIntoView({block: "start"});
  }
}