// mouse over to play music, left to stop music
var audio1 = document.getElementById("player1");
var audio2 = document.getElementById("player2");
var audio3 = document.getElementById("player3");
var audio4 = document.getElementById("player4");
var audio5 = document.getElementById("player5");
var audio6 = document.getElementById("player6");
var audio7 = document.getElementById("player7");
var audio8 = document.getElementById("player8");
var audio9 = document.getElementById("player9");
var audio10 = document.getElementById("player10");
var audio11 = document.getElementById("player11");
var audio12 = document.getElementById("player12");
// append  div
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// play audio
function PlaySound1() 
{
    audio1.currentTime = 0;
    var elem = document.getElementById("timer2");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer3");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer4");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer5");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer6");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer7");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer8");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer9");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer10");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer11");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer12");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}

  if (audio1.duration > 0 && !audio1.paused) {
    } else {
        document.getElementById('box1').style.cssText = 'pointer-events: none;';
    document.getElementById('box1').style.backgroundColor = "#ffed70";
    document.getElementById('imageplus1').style.cssText = 'pointer-events: auto;';
        audio1.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer1";
    el.innerHTML = 00 + ":" + 16;;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile1");
    insertAfter(div, el);
    startTimer1();
}

document.getElementById('flavor-profile1').style.display = 'block';
document.getElementById('button-play1').style.display = 'none';
document.getElementById('flavor-profile2').style.display = 'none';
document.getElementById('button-play2').style.display = 'block';
document.getElementById('box2').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile3').style.display = 'none';
document.getElementById('button-play3').style.display = 'block';
document.getElementById('box3').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile4').style.display = 'none';
document.getElementById('button-play4').style.display = 'block';
document.getElementById('box4').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile5').style.display = 'none';
document.getElementById('button-play5').style.display = 'block';
document.getElementById('box5').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile6').style.display = 'none';
document.getElementById('button-play6').style.display = 'block';
document.getElementById('box6').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile7').style.display = 'none';
document.getElementById('button-play7').style.display = 'block';
document.getElementById('box7').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile8').style.display = 'none';
document.getElementById('button-play8').style.display = 'block';
document.getElementById('box8').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile9').style.display = 'none';
document.getElementById('button-play9').style.display = 'block';
document.getElementById('box9').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile10').style.display = 'none';
document.getElementById('button-play10').style.display = 'block';
document.getElementById('box10').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile11').style.display = 'none';
document.getElementById('button-play11').style.display = 'block';
document.getElementById('box11').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile12').style.display = 'none';
document.getElementById('button-play12').style.display = 'block';
document.getElementById('box12').style.cssText = 'pointer-events: auto;';
}



function PlaySound2() 
{
    audio2.currentTime = 0;
    var elem = document.getElementById("timer1");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer3");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer4");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer5");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer6");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer7");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer8");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer9");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer10");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer11");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer12");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}

    if (audio2.duration > 0 && !audio2.paused) {
    } else {
        document.getElementById('box2').style.cssText = 'pointer-events: none;';
        document.getElementById('box2').style.backgroundColor = "#ffed70";
        document.getElementById('imageplus2').style.cssText = 'pointer-events: auto;';
        audio2.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer2";
    el.innerHTML = 00 + ":" + 17;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile2");
    insertAfter(div, el);
    startTimer2();
}

document.getElementById('flavor-profile2').style.display = 'block';
document.getElementById('button-play2').style.display = 'none';
document.getElementById('flavor-profile1').style.display = 'none';
document.getElementById('button-play1').style.display = 'block';
document.getElementById('box1').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile3').style.display = 'none';
document.getElementById('button-play3').style.display = 'block';
document.getElementById('box3').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile4').style.display = 'none';
document.getElementById('button-play4').style.display = 'block';
document.getElementById('box4').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile5').style.display = 'none';
document.getElementById('button-play5').style.display = 'block';
document.getElementById('box5').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile6').style.display = 'none';
document.getElementById('button-play6').style.display = 'block';
document.getElementById('box6').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile7').style.display = 'none';
document.getElementById('button-play7').style.display = 'block';
document.getElementById('box7').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile8').style.display = 'none';
document.getElementById('button-play8').style.display = 'block';
document.getElementById('box8').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile9').style.display = 'none';
document.getElementById('button-play9').style.display = 'block';
document.getElementById('box9').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile10').style.display = 'none';
document.getElementById('button-play10').style.display = 'block';
document.getElementById('box10').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile11').style.display = 'none';
document.getElementById('button-play11').style.display = 'block';
document.getElementById('box11').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile12').style.display = 'none';
document.getElementById('button-play12').style.display = 'block';
document.getElementById('box12').style.cssText = 'pointer-events: auto;';
}






function PlaySound3() 
{
    audio3.currentTime = 0;
    var elem = document.getElementById("timer1");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer2");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer4");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer5");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer6");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer7");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer8");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer9");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer10");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer11");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer12");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}

    if (audio3.duration > 0 && !audio3.paused) {
    } else {
        document.getElementById('box3').style.cssText = 'pointer-events: none;';
        document.getElementById('imageplus3').style.cssText = 'pointer-events: auto;';
        document.getElementById('box3').style.backgroundColor = "#ffed70";
        audio3.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer3";
    el.innerHTML = 00 + ":" + 18;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile3");
    insertAfter(div, el);
    startTimer3();
}

document.getElementById('flavor-profile3').style.display = 'block';
document.getElementById('button-play3').style.display = 'none';
document.getElementById('flavor-profile1').style.display = 'none';
document.getElementById('button-play1').style.display = 'block';
document.getElementById('box1').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile2').style.display = 'none';
document.getElementById('button-play2').style.display = 'block';
document.getElementById('box2').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile4').style.display = 'none';
document.getElementById('button-play4').style.display = 'block';
document.getElementById('box4').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile5').style.display = 'none';
document.getElementById('button-play5').style.display = 'block';
document.getElementById('box5').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile6').style.display = 'none';
document.getElementById('button-play6').style.display = 'block';
document.getElementById('box6').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile7').style.display = 'none';
document.getElementById('button-play7').style.display = 'block';
document.getElementById('box7').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile8').style.display = 'none';
document.getElementById('button-play8').style.display = 'block';
document.getElementById('box8').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile9').style.display = 'none';
document.getElementById('button-play9').style.display = 'block';
document.getElementById('box9').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile10').style.display = 'none';
document.getElementById('button-play10').style.display = 'block';
document.getElementById('box10').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile11').style.display = 'none';
document.getElementById('button-play11').style.display = 'block';
document.getElementById('box11').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile12').style.display = 'none';
document.getElementById('button-play12').style.display = 'block';
document.getElementById('box12').style.cssText = 'pointer-events: auto;';
}



function PlaySound4() 
{
    audio4.currentTime = 0;
    var elem = document.getElementById("timer1");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer2");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer3");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer5");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer6");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer7");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer8");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer9");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer10");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer11");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer12");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}

    if (audio4.duration > 0 && !audio4.paused) {
    } else {
        document.getElementById('box4').style.cssText = 'pointer-events: none;';
        document.getElementById('imageplus4').style.cssText = 'pointer-events: auto;';
        document.getElementById('box4').style.backgroundColor = "#ffed70";
        audio4.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer4";
    el.innerHTML = 00 + ":" + 27;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile4");
    insertAfter(div, el);
    startTimer4();
}

document.getElementById('flavor-profile4').style.display = 'block';
document.getElementById('button-play4').style.display = 'none';
document.getElementById('flavor-profile1').style.display = 'none';
document.getElementById('button-play1').style.display = 'block';
document.getElementById('box1').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile2').style.display = 'none';
document.getElementById('button-play2').style.display = 'block';
document.getElementById('box2').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile3').style.display = 'none';
document.getElementById('button-play3').style.display = 'block';
document.getElementById('box3').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile5').style.display = 'none';
document.getElementById('button-play5').style.display = 'block';
document.getElementById('box5').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile6').style.display = 'none';
document.getElementById('button-play6').style.display = 'block';
document.getElementById('box6').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile7').style.display = 'none';
document.getElementById('button-play7').style.display = 'block';
document.getElementById('box7').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile8').style.display = 'none';
document.getElementById('button-play8').style.display = 'block';
document.getElementById('box8').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile9').style.display = 'none';
document.getElementById('button-play9').style.display = 'block';
document.getElementById('box9').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile10').style.display = 'none';
document.getElementById('button-play10').style.display = 'block';
document.getElementById('box10').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile11').style.display = 'none';
document.getElementById('button-play11').style.display = 'block';
document.getElementById('box11').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile12').style.display = 'none';
document.getElementById('button-play12').style.display = 'block';
document.getElementById('box12').style.cssText = 'pointer-events: auto;';
}




function PlaySound5() 
{
    audio5.currentTime = 0;
    var elem = document.getElementById("timer1");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer2");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer4");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer3");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer6");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer7");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer8");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer9");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer10");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer11");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer12");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}

    if (audio5.duration > 0 && !audio5.paused) {
    } else {
        document.getElementById('box5').style.cssText = 'pointer-events: none;';
        document.getElementById('imageplus5').style.cssText = 'pointer-events: auto;';
        document.getElementById('box5').style.backgroundColor = "#ffed70";
        audio5.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer5";
    el.innerHTML = 00 + ":" + 28;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile5");
    insertAfter(div, el);
    startTimer5();
}

document.getElementById('flavor-profile5').style.display = 'block';
document.getElementById('button-play5').style.display = 'none';
document.getElementById('flavor-profile1').style.display = 'none';
document.getElementById('button-play1').style.display = 'block';
document.getElementById('box1').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile2').style.display = 'none';
document.getElementById('button-play2').style.display = 'block';
document.getElementById('box2').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile4').style.display = 'none';
document.getElementById('button-play4').style.display = 'block';
document.getElementById('box4').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile3').style.display = 'none';
document.getElementById('button-play3').style.display = 'block';
document.getElementById('box3').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile6').style.display = 'none';
document.getElementById('button-play6').style.display = 'block';
document.getElementById('box6').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile7').style.display = 'none';
document.getElementById('button-play7').style.display = 'block';
document.getElementById('box7').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile8').style.display = 'none';
document.getElementById('button-play8').style.display = 'block';
document.getElementById('box8').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile9').style.display = 'none';
document.getElementById('button-play9').style.display = 'block';
document.getElementById('box9').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile10').style.display = 'none';
document.getElementById('button-play10').style.display = 'block';
document.getElementById('box10').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile11').style.display = 'none';
document.getElementById('button-play11').style.display = 'block';
document.getElementById('box11').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile12').style.display = 'none';
document.getElementById('button-play12').style.display = 'block';
document.getElementById('box12').style.cssText = 'pointer-events: auto;';
}


function PlaySound6() 
{
    audio6.currentTime = 0;
    var elem = document.getElementById("timer1");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer2");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer4");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer5");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer3");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer7");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer8");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer9");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer10");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer11");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer12");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}

    if (audio6.duration > 0 && !audio6.paused) {
    } else {
        document.getElementById('box6').style.cssText = 'pointer-events: none;';
        document.getElementById('imageplus6').style.cssText = 'pointer-events: auto;';
        document.getElementById('box6').style.backgroundColor = "#ffed70";

        audio6.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer6";
    el.innerHTML = 00 + ":" + 18;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile6");
    insertAfter(div, el);
    startTimer6();
}

document.getElementById('flavor-profile6').style.display = 'block';
document.getElementById('button-play6').style.display = 'none';
document.getElementById('flavor-profile1').style.display = 'none';
document.getElementById('button-play1').style.display = 'block';
document.getElementById('box1').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile2').style.display = 'none';
document.getElementById('button-play2').style.display = 'block';
document.getElementById('box2').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile4').style.display = 'none';
document.getElementById('button-play4').style.display = 'block';
document.getElementById('box4').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile5').style.display = 'none';
document.getElementById('button-play5').style.display = 'block';
document.getElementById('box5').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile3').style.display = 'none';
document.getElementById('button-play3').style.display = 'block';
document.getElementById('box3').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile7').style.display = 'none';
document.getElementById('button-play7').style.display = 'block';
document.getElementById('box7').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile8').style.display = 'none';
document.getElementById('button-play8').style.display = 'block';
document.getElementById('box8').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile9').style.display = 'none';
document.getElementById('button-play9').style.display = 'block';
document.getElementById('box9').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile10').style.display = 'none';
document.getElementById('button-play10').style.display = 'block';
document.getElementById('box10').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile11').style.display = 'none';
document.getElementById('button-play11').style.display = 'block';
document.getElementById('box11').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile12').style.display = 'none';
document.getElementById('button-play12').style.display = 'block';
document.getElementById('box12').style.cssText = 'pointer-events: auto;';
}


function PlaySound7() 
{
    audio7.currentTime = 0;
    var elem = document.getElementById("timer1");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer2");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer4");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer5");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer3");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer6");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer8");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer9");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer10");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer11");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer12");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}

    if (audio7.duration > 0 && !audio7.paused) {
    } else {
        document.getElementById('box7').style.cssText = 'pointer-events: none;';
        document.getElementById('imageplus7').style.cssText = 'pointer-events: auto;';
        document.getElementById('box7').style.backgroundColor = "#ffed70";

        audio7.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer7";
    el.innerHTML = 00 + ":" + 30;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile7");
    insertAfter(div, el);
    startTimer7();
}

document.getElementById('flavor-profile7').style.display = 'block';
document.getElementById('button-play7').style.display = 'none';
document.getElementById('flavor-profile1').style.display = 'none';
document.getElementById('button-play1').style.display = 'block';
document.getElementById('box1').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile2').style.display = 'none';
document.getElementById('button-play2').style.display = 'block';
document.getElementById('box2').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile4').style.display = 'none';
document.getElementById('button-play4').style.display = 'block';
document.getElementById('box4').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile5').style.display = 'none';
document.getElementById('button-play5').style.display = 'block';
document.getElementById('box5').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile3').style.display = 'none';
document.getElementById('button-play3').style.display = 'block';
document.getElementById('box3').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile6').style.display = 'none';
document.getElementById('button-play6').style.display = 'block';
document.getElementById('box6').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile8').style.display = 'none';
document.getElementById('button-play8').style.display = 'block';
document.getElementById('box8').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile9').style.display = 'none';
document.getElementById('button-play9').style.display = 'block';
document.getElementById('box9').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile10').style.display = 'none';
document.getElementById('button-play10').style.display = 'block';
document.getElementById('box10').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile11').style.display = 'none';
document.getElementById('button-play11').style.display = 'block';
document.getElementById('box11').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile12').style.display = 'none';
document.getElementById('button-play12').style.display = 'block';
document.getElementById('box12').style.cssText = 'pointer-events: auto;';
}


function PlaySound8() 
{
    audio8.currentTime = 0;
    var elem = document.getElementById("timer1");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer2");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer4");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer5");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer3");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer7");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer6");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer9");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer10");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer11");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer12");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}

    if (audio8.duration > 0 && !audio8.paused) {
    } else {
        document.getElementById('box8').style.cssText = 'pointer-events: none;';
        document.getElementById('imageplus8').style.cssText = 'pointer-events: auto;';
        document.getElementById('box8').style.backgroundColor = "#ffed70";

        audio8.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer8";
    el.innerHTML = 00 + ":" + 32;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile8");
    insertAfter(div, el);
    startTimer8();
}

document.getElementById('flavor-profile8').style.display = 'block';
document.getElementById('button-play8').style.display = 'none';
document.getElementById('flavor-profile1').style.display = 'none';
document.getElementById('button-play1').style.display = 'block';
document.getElementById('box1').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile2').style.display = 'none';
document.getElementById('button-play2').style.display = 'block';
document.getElementById('box2').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile4').style.display = 'none';
document.getElementById('button-play4').style.display = 'block';
document.getElementById('box4').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile5').style.display = 'none';
document.getElementById('button-play5').style.display = 'block';
document.getElementById('box5').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile3').style.display = 'none';
document.getElementById('button-play3').style.display = 'block';
document.getElementById('box3').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile7').style.display = 'none';
document.getElementById('button-play7').style.display = 'block';
document.getElementById('box7').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile6').style.display = 'none';
document.getElementById('button-play6').style.display = 'block';
document.getElementById('box6').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile9').style.display = 'none';
document.getElementById('button-play9').style.display = 'block';
document.getElementById('box9').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile10').style.display = 'none';
document.getElementById('button-play10').style.display = 'block';
document.getElementById('box10').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile11').style.display = 'none';
document.getElementById('button-play11').style.display = 'block';
document.getElementById('box11').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile12').style.display = 'none';
document.getElementById('button-play12').style.display = 'block';
document.getElementById('box12').style.cssText = 'pointer-events: auto;';
}


function PlaySound9() 
{
    audio9.currentTime = 0;
    var elem = document.getElementById("timer1");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer2");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer4");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer5");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer3");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer7");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer8");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer6");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer10");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer11");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer12");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}

    if (audio9.duration > 0 && !audio9.paused) {
    } else {
        document.getElementById('box9').style.cssText = 'pointer-events: none;';
        document.getElementById('imageplus9').style.cssText = 'pointer-events: auto;';
        document.getElementById('box9').style.backgroundColor = "#ffed70";

        audio9.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer9";
    el.innerHTML = 00 + ":" + 32;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile9");
    insertAfter(div, el);
    startTimer9();
}

document.getElementById('flavor-profile9').style.display = 'block';
document.getElementById('button-play9').style.display = 'none';
document.getElementById('flavor-profile1').style.display = 'none';
document.getElementById('button-play1').style.display = 'block';
document.getElementById('box1').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile2').style.display = 'none';
document.getElementById('button-play2').style.display = 'block';
document.getElementById('box2').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile4').style.display = 'none';
document.getElementById('button-play4').style.display = 'block';
document.getElementById('box4').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile5').style.display = 'none';
document.getElementById('button-play5').style.display = 'block';
document.getElementById('box5').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile3').style.display = 'none';
document.getElementById('button-play3').style.display = 'block';
document.getElementById('box3').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile7').style.display = 'none';
document.getElementById('button-play7').style.display = 'block';
document.getElementById('box7').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile8').style.display = 'none';
document.getElementById('button-play8').style.display = 'block';
document.getElementById('box8').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile6').style.display = 'none';
document.getElementById('button-play6').style.display = 'block';
document.getElementById('box6').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile10').style.display = 'none';
document.getElementById('button-play10').style.display = 'block';
document.getElementById('box10').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile11').style.display = 'none';
document.getElementById('button-play11').style.display = 'block';
document.getElementById('box11').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile12').style.display = 'none';
document.getElementById('button-play12').style.display = 'block';
document.getElementById('box12').style.cssText = 'pointer-events: auto;';
}


function PlaySound10() 
{
    audio10.currentTime = 0;
    var elem = document.getElementById("timer1");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer2");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer4");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer5");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer3");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer7");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer8");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer9");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer6");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer11");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer12");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}

    if (audio10.duration > 0 && !audio10.paused) {
    } else {
        document.getElementById('box10').style.cssText = 'pointer-events: none;';
        document.getElementById('imageplus10').style.cssText = 'pointer-events: auto;';
        document.getElementById('box10').style.backgroundColor = "#ffed70";

        audio10.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer10";
    el.innerHTML = 00 + ":" + 23;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile10");
    insertAfter(div, el);
    startTimer10();
}

document.getElementById('flavor-profile10').style.display = 'block';
document.getElementById('button-play10').style.display = 'none';
document.getElementById('flavor-profile1').style.display = 'none';
document.getElementById('button-play1').style.display = 'block';
document.getElementById('box1').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile2').style.display = 'none';
document.getElementById('button-play2').style.display = 'block';
document.getElementById('box2').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile4').style.display = 'none';
document.getElementById('button-play4').style.display = 'block';
document.getElementById('box4').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile5').style.display = 'none';
document.getElementById('button-play5').style.display = 'block';
document.getElementById('box5').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile3').style.display = 'none';
document.getElementById('button-play3').style.display = 'block';
document.getElementById('box3').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile7').style.display = 'none';
document.getElementById('button-play7').style.display = 'block';
document.getElementById('box7').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile8').style.display = 'none';
document.getElementById('button-play8').style.display = 'block';
document.getElementById('box8').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile6').style.display = 'none';
document.getElementById('button-play6').style.display = 'block';
document.getElementById('box6').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile9').style.display = 'none';
document.getElementById('button-play9').style.display = 'block';
document.getElementById('box9').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile11').style.display = 'none';
document.getElementById('button-play11').style.display = 'block';
document.getElementById('box11').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile12').style.display = 'none';
document.getElementById('button-play12').style.display = 'block';
document.getElementById('box12').style.cssText = 'pointer-events: auto;';
}

function PlaySound11() 
{
    audio11.currentTime = 0;
    var elem = document.getElementById("timer1");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer2");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer4");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer5");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer3");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer7");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer8");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer9");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer10");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer6");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer12");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}
    if (audio11.duration > 0 && !audio11.paused) {
    } else {
        document.getElementById('box11').style.cssText = 'pointer-events: none;';
        document.getElementById('imageplus11').style.cssText = 'pointer-events: auto;';
        document.getElementById('box11').style.backgroundColor = "#ffed70";

        audio11.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer11";
    el.innerHTML = 00 + ":" + 35;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile11");
    insertAfter(div, el);
    startTimer11();
}

document.getElementById('flavor-profile11').style.display = 'block';
document.getElementById('button-play11').style.display = 'none';
document.getElementById('flavor-profile1').style.display = 'none';
document.getElementById('button-play1').style.display = 'block';
document.getElementById('box1').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile2').style.display = 'none';
document.getElementById('button-play2').style.display = 'block';
document.getElementById('box2').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile4').style.display = 'none';
document.getElementById('button-play4').style.display = 'block';
document.getElementById('box4').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile5').style.display = 'none';
document.getElementById('button-play5').style.display = 'block';
document.getElementById('box5').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile3').style.display = 'none';
document.getElementById('button-play3').style.display = 'block';
document.getElementById('box3').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile7').style.display = 'none';
document.getElementById('button-play7').style.display = 'block';
document.getElementById('box7').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile8').style.display = 'none';
document.getElementById('button-play8').style.display = 'block';
document.getElementById('box8').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile6').style.display = 'none';
document.getElementById('button-play6').style.display = 'block';
document.getElementById('box6').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile10').style.display = 'none';
document.getElementById('button-play10').style.display = 'block';
document.getElementById('box10').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile9').style.display = 'none';
document.getElementById('button-play9').style.display = 'block';
document.getElementById('box9').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile12').style.display = 'none';
document.getElementById('button-play12').style.display = 'block';
document.getElementById('box12').style.cssText = 'pointer-events: auto;';
}

function PlaySound12() 
{
    audio12.currentTime = 0;
    var elem = document.getElementById("timer1");
    if (elem === null) {}else{elem.parentNode.removeChild(elem);}
    var elem1 = document.getElementById("timer2");
    if (elem1 === null) {}else{elem1.parentNode.removeChild(elem1);}
    var elem2 = document.getElementById("timer4");
    if (elem2 === null) {}else{elem2.parentNode.removeChild(elem2);}
    var elem3 = document.getElementById("timer5");
    if (elem3 === null) {}else{elem3.parentNode.removeChild(elem3);}
    var elem4 = document.getElementById("timer3");
    if (elem4 === null) {}else{elem4.parentNode.removeChild(elem4);}
    var elem5 = document.getElementById("timer7");
    if (elem5 === null) {}else{elem5.parentNode.removeChild(elem5);}
    var elem6 = document.getElementById("timer8");
    if (elem6 === null) {}else{elem6.parentNode.removeChild(elem6);}
    var elem7 = document.getElementById("timer9");
    if (elem7 === null) {}else{elem7.parentNode.removeChild(elem7);}
    var elem8 = document.getElementById("timer10");
    if (elem8 === null) {}else{elem8.parentNode.removeChild(elem8);}
    var elem9 = document.getElementById("timer11");
    if (elem9 === null) {}else{elem9.parentNode.removeChild(elem9);}
    var elem10 = document.getElementById("timer6");
    if (elem10 === null) {}else{elem10.parentNode.removeChild(elem10);}
    if (audio12.duration > 0 && !audio12.paused) {
    } else {
        document.getElementById('box12').style.cssText = 'pointer-events: none;';
        document.getElementById('imageplus12').style.cssText = 'pointer-events: auto;';
        document.getElementById('box12').style.backgroundColor = "#ffed70";

        audio12.play();
    // add div time after div
    var el = document.createElement("div");
    el.id = "timer12";
    el.innerHTML = 00 + ":" + 44;
    el.style.position = "relative";
    el.style.top = "4px";
    el.style.height = "14px";
    el.style.fontSize = "16px";
    var div = document.getElementById("flavor-profile12");
    insertAfter(div, el);
    startTimer12();
}

document.getElementById('flavor-profile12').style.display = 'block';
document.getElementById('button-play12').style.display = 'none';
document.getElementById('flavor-profile1').style.display = 'none';
document.getElementById('button-play1').style.display = 'block';
document.getElementById('box1').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile2').style.display = 'none';
document.getElementById('button-play2').style.display = 'block';
document.getElementById('box2').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile4').style.display = 'none';
document.getElementById('button-play4').style.display = 'block';
document.getElementById('box4').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile5').style.display = 'none';
document.getElementById('button-play5').style.display = 'block';
document.getElementById('box5').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile3').style.display = 'none';
document.getElementById('button-play3').style.display = 'block';
document.getElementById('box3').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile7').style.display = 'none';
document.getElementById('button-play7').style.display = 'block';
document.getElementById('box7').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile8').style.display = 'none';
document.getElementById('button-play8').style.display = 'block';
document.getElementById('box8').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile6').style.display = 'none';
document.getElementById('button-play6').style.display = 'block';
document.getElementById('box6').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile10').style.display = 'none';
document.getElementById('button-play10').style.display = 'block';
document.getElementById('box10').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile11').style.display = 'none';
document.getElementById('button-play11').style.display = 'block';
document.getElementById('box11').style.cssText = 'pointer-events: auto;';
document.getElementById('flavor-profile9').style.display = 'none';
document.getElementById('button-play9').style.display = 'block';
document.getElementById('box9').style.cssText = 'pointer-events: auto;';
}







function startTimer1() {
    var presentTime = document.getElementById('timer1').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer1");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer1').innerHTML =
          m + ":" + s;
          setTimeout(startTimer1, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}


function startTimer2() {
    var presentTime = document.getElementById('timer2').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer2");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer2').innerHTML =
          m + ":" + s;
          setTimeout(startTimer2, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}


function startTimer3() {
    var presentTime = document.getElementById('timer3').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer3");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer3').innerHTML =
          m + ":" + s;
          setTimeout(startTimer3, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}

function startTimer4() {
    var presentTime = document.getElementById('timer4').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer4");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer4').innerHTML =
          m + ":" + s;
          setTimeout(startTimer4, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}

function startTimer5() {
    var presentTime = document.getElementById('timer5').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer5");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer5').innerHTML =
          m + ":" + s;
          setTimeout(startTimer5, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}

function startTimer6() {
    var presentTime = document.getElementById('timer6').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer6");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer6').innerHTML =
          m + ":" + s;
          setTimeout(startTimer6, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}

function startTimer7() {
    var presentTime = document.getElementById('timer7').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer7");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer7').innerHTML =
          m + ":" + s;
          setTimeout(startTimer7, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}

function startTimer8() {
    var presentTime = document.getElementById('timer8').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer8");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer8').innerHTML =
          m + ":" + s;
          setTimeout(startTimer8, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}

function startTimer9() {
    var presentTime = document.getElementById('timer9').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer9");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer9').innerHTML =
          m + ":" + s;
          setTimeout(startTimer9, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}


function startTimer10() {
    var presentTime = document.getElementById('timer10').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer10");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer10').innerHTML =
          m + ":" + s;
          setTimeout(startTimer10, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}

function startTimer11() {
    var presentTime = document.getElementById('timer11').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer11");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer11').innerHTML =
          m + ":" + s;
          setTimeout(startTimer11, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}

function startTimer12() {
    var presentTime = document.getElementById('timer12').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
      if(m<0){
          var elem = document.getElementById("timer12");
          elem.parentNode.removeChild(elem);
      }
      else{
          document.getElementById('timer12').innerHTML =
          m + ":" + s;
          setTimeout(startTimer12, 1000);}
      }

      function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}





audio1.addEventListener("ended", function(){
   audio1.currentTime = 0;
   document.getElementById('box1').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile1').style.display = 'none';
   document.getElementById('button-play1').style.display = 'block';
});
audio2.addEventListener("ended", function(){
   audio2.currentTime = 0;
   document.getElementById('box2').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile2').style.display = 'none';
   document.getElementById('button-play2').style.display = 'block';
});
audio3.addEventListener("ended", function(){
   audio3.currentTime = 0;
   document.getElementById('box3').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile3').style.display = 'none';
   document.getElementById('button-play3').style.display = 'block';
});
audio4.addEventListener("ended", function(){
   audio4.currentTime = 0;
   document.getElementById('box4').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile4').style.display = 'none';
   document.getElementById('button-play4').style.display = 'block';
});
audio5.addEventListener("ended", function(){
   audio5.currentTime = 0;
   document.getElementById('box5').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile5').style.display = 'none';
   document.getElementById('button-play5').style.display = 'block';
});
audio6.addEventListener("ended", function(){
   audio6.currentTime = 0;
   document.getElementById('box6').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile6').style.display = 'none';
   document.getElementById('button-play6').style.display = 'block';
});
audio7.addEventListener("ended", function(){
   audio7.currentTime = 0;
   document.getElementById('box7').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile7').style.display = 'none';
   document.getElementById('button-play7').style.display = 'block';
});
audio8.addEventListener("ended", function(){
   audio8.currentTime = 0;
   document.getElementById('box8').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile8').style.display = 'none';
   document.getElementById('button-play8').style.display = 'block';
});
audio9.addEventListener("ended", function(){
   audio9.currentTime = 0;
   document.getElementById('box9').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile9').style.display = 'none';
   document.getElementById('button-play9').style.display = 'block';
});
audio10.addEventListener("ended", function(){
   audio10.currentTime = 0;
   document.getElementById('box10').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile10').style.display = 'none';
   document.getElementById('button-play10').style.display = 'block';
});
audio11.addEventListener("ended", function(){
   audio11.currentTime = 0;
   document.getElementById('box11').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile11').style.display = 'none';
   document.getElementById('button-play11').style.display = 'block';
});
audio12.addEventListener("ended", function(){
   audio12.currentTime = 0;
   document.getElementById('box12').style.cssText = 'pointer-events: auto;';
   document.getElementById('flavor-profile12').style.display = 'none';
   document.getElementById('button-play12').style.display = 'block';
});


// function StopSound6() {
//     var audio = document.getElementById("player6"); audio.play(); 
//     audio.pause();
//     audio.currentTime = 0;
// }