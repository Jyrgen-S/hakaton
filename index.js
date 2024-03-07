function hint() {
    setTimeout(function() {
        document.getElementById("hint1").innerHTML = "Hint 1";
    }, 10);

    setTimeout(function() {
        document.getElementById("hint2").innerHTML = "Hint 2";
    }, 20);

    setTimeout(function() {
        document.getElementById("hint3").innerHTML = "Hint 3";
    }, 30);
}

function getinPu(formId, ansId , outID){
    var x = document.getElementById(formId);
    var text = "";
    text += x.elements[0].value;
    input(text, ansId , outID);
  }

  
function input(x, ansId, outID){
      let text1 = document.getElementById(ansId).innerHTML; 
      let text2 = x;

      
      let result = text1.localeCompare(x);

      if (result == 0) {
        document.getElementById(outID).innerHTML = "Murdsid parooli. Parool oli " + document.getElementById(ansId).innerHTML;
      } else {
        document.getElementById(outID).innerHTML = "Ei sisestanud õiget parooli";
      }
  }