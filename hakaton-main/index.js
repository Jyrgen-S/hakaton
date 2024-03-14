function getinPu(formId, ansId , outID){
    var x = document.getElementById(formId);
    var text = "";
    var number = x.elements[0].id.slice(-1)
    text += x.elements[0].value;
    console.log( x.elements[0])
    input(text, ansId , outID, number);

   
    
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

  var form = document.getElementById("fm2");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);

  
  function changePic(x){
    console.log(x)
    if (x == 'lukk1' || x == 'lukk2'){
      document.getElementById(x).src='./img/10yo_boy_2 1.png';
    }

    if (x == 'lukk3' || x == 'lukk4'){
      document.getElementById(x).src='./img/16yo_girl_2.png';
    }

    if (x == 'lukk5' || x == 'lukk6'){
      document.getElementById(x).src='./img/shady_dude 1.png';
    }
  }