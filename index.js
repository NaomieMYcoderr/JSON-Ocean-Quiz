var i = 0;
var correctCount = 0 ;
generate(0);
/*generate from json data with index*/
function generate(index){
    document.getElementById("question").innerHTML = jsonData[index].q;
    document.getElementById("optt1").innerHTML = jsonData[index].opt1;
    document.getElementById("optt2").innerHTML = jsonData[index].opt2;
    document.getElementById("optt3").innerHTML = jsonData[index].opt3;
    document.getElementById("optt4").innerHTML = jsonData[index].opt4;
}

function checkAnswer(){
    if (document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer) {
        correctCount++;
    }
    if (document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer) { 
        correctCount++;
    }
    if (document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer) {
        correctCount++;
    }
    if (document.getElementById("opt4").checked && jsonData[i].opt4 == jsonData[i].answer) {
        correctCount++;
     }   
   


   /* increment i for next question*/
   i++;
   if(jsonData.length-1 < i){
   document.write("<body style='background-color:rgba(50,162,251,1.00'>")    
    document.write("Congratulations! Your score is : "+correctCount+" of of 5, please check out the feedback link to read explanations of the answers!");
    
    
   }
  //callback to generate
   generate(i);
}
