//once starting one song stop others
document.addEventListener('play', function(e){
  var audios = document.getElementsByTagName('audio');
  for(var i = 0, len = audios.length; i < len;i++){
    if(audios[i] != e.target){
      audios[i].pause();
    }
  }
}, true);


//calculate flavor profile components
function bitterValue()
{
  var bitternum=0;
  var bitternumtotal=0;
  var bittercount=0;
//Get a reference to the form id="flavorform"
var theForm = document.forms["flavorform"];
var includemusic1 = theForm.elements["includemusic1"];
var includemusic2 = theForm.elements["includemusic2"];
var includemusic3 = theForm.elements["includemusic3"];
var includemusic4 = theForm.elements["includemusic4"];
var includemusic5 = theForm.elements["includemusic5"];
var includemusic6 = theForm.elements["includemusic6"];
var includemusic7 = theForm.elements["includemusic7"];
var includemusic8 = theForm.elements["includemusic8"];
var includemusic9 = theForm.elements["includemusic9"];
var includemusic10 = theForm.elements["includemusic10"];
var includemusic11 = theForm.elements["includemusic11"];
var includemusic12 = theForm.elements["includemusic12"];

//if no box checked add back the suggestion
if (document.querySelectorAll("input[name='music']:checked").length === 0) {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
  var el = document.createElement("div");
  el.innerHTML = "<div id='description'><img src='data/empty.png'><p>Start adding music by checking the box!</p></div>";
  var div = document.getElementById("ingredients-title");
  insertAfter(div, el);
}



if(includemusic1.checked==true)
{
  bitternum=3;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
document.getElementById('ingredient1').innerHTML =
"<a href='#'><img src='data/les-nuits.jpg' /></a>";
}
if(includemusic1.checked==false){
  document.getElementById('ingredient1').innerHTML =
  " ";
}

if(includemusic2.checked==true)
{
  bitternum=9;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
  document.getElementById('ingredient2').innerHTML =
  "<a href='#'><img src='data/7years-in-Tibet.jpg' /></a>";
}
else{document.getElementById('ingredient2').innerHTML =
  " ";}



if(includemusic3.checked==true)
{
  bitternum=2;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
  document.getElementById('ingredient3').innerHTML =
  "<a href='#'><img src='data/hoping.jpg' /></a>";
}
else{document.getElementById('ingredient3').innerHTML =
  " ";}


//LittleLou
if(includemusic4.checked==true)
{
  bitternum=4;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
  document.getElementById('ingredient4').innerHTML =
  "<a href='#'><img src='data/LittleLou.jpg' /></a>";
}
else{document.getElementById('ingredient4').innerHTML =
  " ";}


//10yearsgone
if(includemusic5.checked==true)
{
  bitternum=7;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
  document.getElementById('ingredient5').innerHTML =
  "<a href='#'><img src='data/10yearsgone.jpg' /></a>";
}
else{document.getElementById('ingredient5').innerHTML =
  " ";}

//Isolée - Pisco
if(includemusic6.checked==true)
{
  bitternum=1;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
  document.getElementById('ingredient6').innerHTML =
  "<a href='#'><img src='data/IsoleePisco.jpg' /></a>";
}
else{document.getElementById('ingredient6').innerHTML =
  " ";}

//Frédéric Chopin - Prelude in E-Minor
if(includemusic7.checked==true)
{
  bitternum=8;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
  document.getElementById('ingredient7').innerHTML =
  "<a href='#'><img src='data/Chopin.jpg' /></a>";
}
else{document.getElementById('ingredient7').innerHTML =
  " ";}

 //Blood Orange - You're Not Good Enough 
if(includemusic8.checked==true)
{
  bitternum=3;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
  document.getElementById('ingredient8').innerHTML =
  "<a href='#'><img src='data/youre_not_good_enough.jpg' /></a>";
}
else{document.getElementById('ingredient8').innerHTML =
  " ";}

 //Omar Souleyman - Wenu Wenu 
if(includemusic9.checked==true)
{
  bitternum=2;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
  document.getElementById('ingredient9').innerHTML =
  "<a href='#'><img src='data/WenuWenu.jpg' /></a>";
}
else{document.getElementById('ingredient9').innerHTML =
  " ";}

 //Dennis Brown - Money in my pocket 
if(includemusic10.checked==true)
{
  bitternum=2;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
  document.getElementById('ingredient10').innerHTML =
  "<a href='#'><img src='data/Money-in-my-pocket.jpg' /></a>";
}
else{document.getElementById('ingredient10').innerHTML =
  " ";}

 //Björk - Human Behavior 
if(includemusic11.checked==true)
{
  bitternum=6;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
  document.getElementById('ingredient11').innerHTML =
  "<a href='#'><img src='data/HumanBehavior.jpg' /></a>";
}
else{document.getElementById('ingredient11').innerHTML =
  " ";}

 //Scott Hamilton - Min Soldat 
if(includemusic12.checked==true)
{
  bitternum=5;
  bittercount++;
  bitternumtotal=bitternumtotal+bitternum;
  document.getElementById('ingredient12').innerHTML =
  "<a href='#'><img src='data/MinSoldat.jpg' /></a>";
}
else{document.getElementById('ingredient12').innerHTML =
  " ";}


//avoid NaN value
if(bittercount==0){return bittercount;}
else{
  return Math.round(bitternumtotal/bittercount);}



}




//SWEET
function sweetValue()
{
  var sweetnum=0;
  var sweetnumtotal=0;
  var sweetcount=0;
//Get a reference to the form id="flavorform"
var theForm = document.forms["flavorform"];
var includemusic1 = theForm.elements["includemusic1"];
var includemusic2 = theForm.elements["includemusic2"];
var includemusic3 = theForm.elements["includemusic3"];
var includemusic4 = theForm.elements["includemusic4"];
var includemusic5 = theForm.elements["includemusic5"];
var includemusic6 = theForm.elements["includemusic6"];
var includemusic7 = theForm.elements["includemusic7"];
var includemusic8 = theForm.elements["includemusic8"];
var includemusic9 = theForm.elements["includemusic9"];
var includemusic10 = theForm.elements["includemusic10"];
var includemusic11 = theForm.elements["includemusic11"];
var includemusic12 = theForm.elements["includemusic12"];

if(includemusic1.checked==true)
{
  sweetnum=9;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}
if(includemusic2.checked==true)
{
  sweetnum=7;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}

if(includemusic3.checked==true)
{
  sweetnum=6;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}

if(includemusic4.checked==true)
{
  sweetnum=5;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}

if(includemusic5.checked==true)
{
  sweetnum=3;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}

if(includemusic6.checked==true)
{
  sweetnum=8;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}
if(includemusic7.checked==true)
{
  sweetnum=4;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}
if(includemusic8.checked==true)
{
  sweetnum=5;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}
if(includemusic9.checked==true)
{
  sweetnum=7;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}
if(includemusic10.checked==true)
{
  sweetnum=9;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}
if(includemusic11.checked==true)
{
  sweetnum=1;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}
if(includemusic12.checked==true)
{
  sweetnum=8;
  sweetcount++;
  sweetnumtotal=sweetnumtotal+sweetnum;
}
//avoid NaN value
if(sweetcount==0){return sweetcount;}
else{
  return Math.round(sweetnumtotal/sweetcount);}
}



//SOUR
function sourValue()
{
  var sournum=0;
  var sournumtotal=0;
  var sourcount=0;
//Get a reference to the form id="flavorform"
var theForm = document.forms["flavorform"];
var includemusic1 = theForm.elements["includemusic1"];
var includemusic2 = theForm.elements["includemusic2"];
var includemusic3 = theForm.elements["includemusic3"];
var includemusic4 = theForm.elements["includemusic4"];
var includemusic5 = theForm.elements["includemusic5"];
var includemusic6 = theForm.elements["includemusic6"];
var includemusic7 = theForm.elements["includemusic7"];
var includemusic8 = theForm.elements["includemusic8"];
var includemusic9 = theForm.elements["includemusic9"];
var includemusic10 = theForm.elements["includemusic10"];
var includemusic11 = theForm.elements["includemusic11"];
var includemusic12 = theForm.elements["includemusic12"];

if(includemusic1.checked==true)
{
  sournum=6;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}
if(includemusic2.checked==true)
{
  sournum=3;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}

if(includemusic3.checked==true)
{
  sournum=9;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}

if(includemusic4.checked==true)
{
  sournum=2;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}

if(includemusic5.checked==true)
{
  sournum=2;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}

if(includemusic6.checked==true)
{
  sournum=8;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}

if(includemusic7.checked==true)
{
  sournum=7;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}
if(includemusic8.checked==true)
{
  sournum=4;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}
if(includemusic9.checked==true)
{
  sournum=3;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}
if(includemusic10.checked==true)
{
  sournum=5;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}
if(includemusic11.checked==true)
{
  sournum=6;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}
if(includemusic12.checked==true)
{
  sournum=2;
  sourcount++;
  sournumtotal=sournumtotal+sournum;
}

//avoid NaN value
if(sourcount==0){return sourcount;}
else{
  return Math.round(sournumtotal/sourcount);}
}



//SALTY
function saltyValue()
{
  var saltynum=0;
  var saltynumtotal=0;
  var saltycount=0;
//Get a reference to the form id="flavorform"
var theForm = document.forms["flavorform"];
var includemusic1 = theForm.elements["includemusic1"];
var includemusic2 = theForm.elements["includemusic2"];
var includemusic3 = theForm.elements["includemusic3"];
var includemusic4 = theForm.elements["includemusic4"];
var includemusic5 = theForm.elements["includemusic5"];
var includemusic6 = theForm.elements["includemusic6"];
var includemusic7 = theForm.elements["includemusic7"];
var includemusic8 = theForm.elements["includemusic8"];
var includemusic9 = theForm.elements["includemusic9"];
var includemusic10 = theForm.elements["includemusic10"];
var includemusic11 = theForm.elements["includemusic11"];
var includemusic12 = theForm.elements["includemusic12"];

if(includemusic1.checked==true)
{
  saltynum=8;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}
if(includemusic2.checked==true)
{
  saltynum=3;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}

if(includemusic3.checked==true)
{
  saltynum=8;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}

if(includemusic4.checked==true)
{
  saltynum=4;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}

if(includemusic5.checked==true)
{
  saltynum=6;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}
if(includemusic6.checked==true)
{
  saltynum=6;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}
if(includemusic7.checked==true)
{
  saltynum=3;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}
if(includemusic8.checked==true)
{
  saltynum=5;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}
if(includemusic9.checked==true)
{
  saltynum=9;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}
if(includemusic10.checked==true)
{
  saltynum=7;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}
if(includemusic11.checked==true)
{
  saltynum=5;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}
if(includemusic12.checked==true)
{
  saltynum=4;
  saltycount++;
  saltynumtotal=saltynumtotal+saltynum;
}
//avoid NaN value
if(saltycount==0){return saltycount;}
else{
  return Math.round(saltynumtotal/saltycount);}
}


// spicy
function spicyValue()
{
  var spicynum=0;
  var spicynumtotal=0;
  var spicycount=0;
//Get a reference to the form id="flavorform"
var theForm = document.forms["flavorform"];
var includemusic1 = theForm.elements["includemusic1"];
var includemusic2 = theForm.elements["includemusic2"];
var includemusic3 = theForm.elements["includemusic3"];
var includemusic4 = theForm.elements["includemusic4"];
var includemusic5 = theForm.elements["includemusic5"];
var includemusic6 = theForm.elements["includemusic6"];
var includemusic7 = theForm.elements["includemusic7"];
var includemusic8 = theForm.elements["includemusic8"];
var includemusic9 = theForm.elements["includemusic9"];
var includemusic10 = theForm.elements["includemusic10"];
var includemusic11 = theForm.elements["includemusic11"];
var includemusic12 = theForm.elements["includemusic12"];

if(includemusic1.checked==true)
{
  spicynum=2;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}
if(includemusic2.checked==true)
{
  spicynum=2;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}

if(includemusic3.checked==true)
{
  spicynum=6;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}

if(includemusic4.checked==true)
{
  spicynum=3;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}

if(includemusic5.checked==true)
{
  spicynum=3;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}

if(includemusic6.checked==true)
{
  spicynum=8;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}
if(includemusic7.checked==true)
{
  spicynum=1;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}
if(includemusic8.checked==true)
{
  spicynum=4;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}
if(includemusic9.checked==true)
{
  spicynum=8;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}
if(includemusic10.checked==true)
{
  spicynum=3;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}
if(includemusic11.checked==true)
{
  spicynum=5;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}
if(includemusic12.checked==true)
{
  spicynum=1;
  spicycount++;
  spicynumtotal=spicynumtotal+spicynum;
}
//avoid NaN value
if (spicycount==0){return spicycount;}
else{
  return Math.round (spicynumtotal/spicycount);}
}

function calculateTotal()
{
    // get rid the description
    var myElem = document.getElementById('description');
    if (myElem === null){}
      else{
        myElem.parentNode.removeChild(myElem);}

//Here we get the total price by calling our function
//Each function returns a number so by calling them we add the values they return together
var bitter = bitterValue()
var sweet = sweetValue()
var sour = sourValue()
var salty = saltyValue()
var spicy = spicyValue()
//store the score for second page
localStorage.setItem('flavor-sweet',sweet);
localStorage.setItem('flavor-sour',sour);
localStorage.setItem('flavor-bitter',bitter);
localStorage.setItem('flavor-salty',salty);
localStorage.setItem('flavor-spicy',spicy);
}


//cancle sellection
function cancle1(){
  document.getElementById('ingredient1').innerHTML =
  " ";
  document.getElementById("includemusic1").checked = false;
}
function cancle2(){
  document.getElementById('ingredient2').innerHTML =
  " ";
  document.getElementById("includemusic2").checked = false;
}
function cancle3(){
  document.getElementById('ingredient3').innerHTML =
  " ";
  document.getElementById("includemusic3").checked = false;
}
function cancle4(){
  document.getElementById('ingredient4').innerHTML =
  " ";
  document.getElementById("includemusic4").checked = false;
}
function cancle5(){
  document.getElementById('ingredient5').innerHTML =
  " ";
  document.getElementById("includemusic5").checked = false;
}
function cancle6(){
  document.getElementById('ingredient6').innerHTML =
  " ";
  document.getElementById("includemusic6").checked = false;
}
function cancle7(){
  document.getElementById('ingredient7').innerHTML =
  " ";
  document.getElementById("includemusic7").checked = false;
}
function cancle8(){
  document.getElementById('ingredient8').innerHTML =
  " ";
  document.getElementById("includemusic8").checked = false;
}
function cancle9(){
  document.getElementById('ingredient9').innerHTML =
  " ";
  document.getElementById("includemusic9").checked = false;
}
function cancle10(){
  document.getElementById('ingredient10').innerHTML =
  " ";
  document.getElementById("includemusic10").checked = false;
}
function cancle11(){
  document.getElementById('ingredient11').innerHTML =
  " ";
  document.getElementById("includemusic11").checked = false;
}
function cancle12(){
  document.getElementById('ingredient12').innerHTML =
  " ";
  document.getElementById("includemusic12").checked = false;
}


// click to play click to stop function
// var audio1 = document.getElementById("player1");
// function play1(){
//   audio1.play();
//   document.getElementById('flavor-profile1').style.display='block';
//   document.getElementById('flavor-profile2').style.display='none';
//   document.getElementById('flavor-profile3').style.display='none';
//   document.getElementById('flavor-profile4').style.display='none';
//   document.getElementById('flavor-profile5').style.display='none';
//   document.getElementById('flavor-profile6').style.display='none';    
//   document.getElementById('button-play1').style.opacity ='0';
//   document.getElementById('button-play2').style.opacity ='1';
//   document.getElementById('button-play3').style.opacity ='1';
//   document.getElementById('button-play4').style.opacity ='1';
//   document.getElementById('button-play5').style.opacity ='1';
//   document.getElementById('button-play6').style.opacity ='1';

// }

// // when audio reach the end
// audio1.addEventListener("ended", function(){
//  audio1.currentTime = 0;
//  console.log("ended");
//  document.getElementById('button-play1').style.opacity ='1';
//  document.getElementById('flavor-profile1').style.display='none';
// });

// // when click the stop button set the audio to 0
// function play11(){
//   audio1.pause();
//   audio1.currentTime = 0;
//   document.getElementById('button-play1').style.opacity ='1';
//   document.getElementById('flavor-profile1').style.display='none';
// }