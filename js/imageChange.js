var images = ["chatbotImg", "dropdownImg","htmlImg","sqlImg"];
//on load
document.getElementById(images[0]).style.display = "inline-block";

var delayMs = 10000;
var index = 0;
var break_test = 0;

setInterval(function(){
  index++;

  document.getElementById(images[index -1]).style.display = "none";
  if (index >= images.length){
    index = 0;
  }
  document.getElementById(images[index]).style.display = "inline-block";
  //index++;
  //console.log(images.length);
  document.getElementById("images").style.height;
  //console.log(document.getElementById("images").style.height);

},delayMs);
