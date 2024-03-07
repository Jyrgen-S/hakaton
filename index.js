function hint() {
    document.getElementById("hint").innerHTML = "hint here.";
  }
  
function getinPu(formId, ansId , outID){
    var x = document.getElementById(formId);
    var text = "";
    var number = x.elements[0].id.slice(-1)
    text += x.elements[0].value;
    input(text, ansId , outID, number);
    preventDefault();
    return false;
  }

  
function input(x, ansId, outID ,number){
      let text1 = document.getElementById(ansId).innerHTML; 
      let text2 = x;
      let result = text1.localeCompare(x);

      if (result == 0) {
        document.getElementById(outID).innerHTML = "Murdsid parooli. Parool oli " + document.getElementById(ansId).innerHTML;
        changePic("lukk"+number);
      } else {
        document.getElementById(outID).innerHTML = "Ei sisestanud õiget parooli";
      }
      return false;
  }

  var form = document.getElementById("frm1");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);

  function changePic(x){
    document.getElementById(x).src='https://placehold.co/250x250';
  }