var button = document.getElementById("submit");
console.log(button);
var h3 = document.getElementById("you-got");


button.addEventListener("click", function (event) {
  
  event.preventDefault();

  var imageArray = ["images/gary.jpg", "images/globby.jpg", "images/jandfalf.jpg", "images/slowdo.png", "images/goljim.jpg", "images/jewbacca.jpg", "images/rolldemort.jpg" ];

  var randomNumber = imageArray[Math.floor(Math.random()*imageArray.length)];

  document.getElementById("img").setAttribute("src", randomNumber);
  document.getElementById("img").setAttribute("height", "300px");
  document.getElementById("img").setAttribute("width", "300px");
  
  col1.innerHTML = "";
  if (randomNumber === imageArray[0]) {
  h3.innerHTML = "You got Gary Porter";
  }
  if (randomNumber === imageArray[1]) {
  h3.innerHTML = "You got Globby";
  }
  if (randomNumber === imageArray[2]) {
    h3.innerHTML = "You got Jandalf";
  }
  if (randomNumber === imageArray[3]) {
  h3.innerHTML = "You got Ugly Frodo";
  }
  if (randomNumber === imageArray[4]) {
  h3.innerHTML = "You got Goljim";
  }
  if (randomNumber === imageArray[5]) {
  h3.innerHTML = "You got Jewbacca";
  }
  if (randomNumber === imageArray[6]) {
  h3.innerHTML = "You got Rolldemort";
  }
});

// var button = document.getElementById("submit");
// button.addEventListener("click", 
// function (event) {

//   event.preventDefault();

//   var c1score = 0;
//   var c2score = 0;
//   var c3score = 0;

//   var choices = document.getElementsByTagName("input");
//   console.log(choices);

//   for (i = 0; i<choices.length; i++) {
//     if (choices[i].checked) {
//       if (choices[i].value == 'c1') {
//         c1score = c1score + 1;
//       }
//       if (choices[i].value == 'c2') {
//         c2score = c2score + 1;
//       }
//     if (choices[i].value == 'c3') { 
//       c3score = c3score + 1;
//       }
//     }
//   }

//   //which score got the highest score
//   // var maxscore = Math.max (c1score, c2score, c3score);
//   // console.log(maxscore);

//   var result = document.getElementById("img");
//   var h3 = document.getElementById("you-got");
//   var col1 = document.getElementById("col1");


//   if (c1score > c2score && c1score < c3score) {
//     h3.innerHTML = "You got Jandalf";
//     col1.innerHTML = "";
//     result.setAttribute("src", "images/jandfalf.jpg");
//   }
//   if (c1score > c2score && c1score > c3score) {
//     h3.innerHTML = "You got Ugly Frodo";
//     col1.innerHTML = "";
//     result.setAttribute("src", "images/slowdo.png");
//   }
//   if (c1score > c2score && c1score === c3score) {
//     h3.innerHTML = "You got Gary Porter";
//     col1.innerHTML = "";
//     result.setAttribute("src", "images/gary.jpg");
//   }
//   if (c1score < c2score && c1score < c3score) {
//     h3.innerHTML = "You got Globby";
//     col1.innerHTML = "";
//     result.setAttribute("src", "images/globby.jpg");
//   }
//   if (c1score < c2score && c1score > c3score) {
//     h3.innerHTML = "You got Golljim";
//     col1.innerHTML = "";
//     result.setAttribute("src", "images/goljim.jpg");
//   }  
//   if (c1score < c2score && c1score === c3score) {
//     h3.innerHTML = "You got Jewbacca";
//     col1.innerHTML = "";
//     result.setAttribute("src", "images/jewbacca.jpg");
//   }
//   if (c1score === c2score && c1score < c3score) {
//     h3.innerHTML = "You got Rolldemort";
//     col1.innerHTML = "";
//     result.setAttribute("src", "images/rolldemort.jpg");
//   }
//   if (c1score === c2score && c1score > c3score) {
//     h3.innerHTML = "You got Max";
//     col1.innerHTML = "";
//     result.setAttribute("src", "images/max.gif");
//   }
//   if (c1score === c2score && c1score === c3score) {
//     h3.innerHTML = "You got Gary Porter";
//     col1.innerHTML = "";
//     result.setAttribute("src", "images/gary.jpg");
//   }
// }
// );