$(document).ready(function(){
    $('#phone').keypress(function (e) {
        var regex = new RegExp("^[0-9+ ]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        e.preventDefault();
        return false;
    });

    $("input").change(function(e){
      if(e.target.name !== 'phone')
            validateInput(e)
    });
  });
  


  const validateInput = e => {
    if(e.target.name === 'email'){
        $( "#email" ).closest('div').find('span').remove();
        checkEmail(e.target.value) ? $( "#email" ).closest('div').find('span').remove() : $( "#email" ).closest('div').append( "<span>Invalid Email</span>" );
    }
    else if(e.target.name === 'password'){
        $( "#password" ).closest('div').find('span').remove();
        checkPassword(e.target.value) ? $( "#password" ).closest('div').find('span').remove() : $( "#password" ).closest('div').append( "<span>Invalid Password</span>" );
    }
}

  const checkEmail = email => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));

  const checkPassword = password => (/^(?=.{8,})(?=.*[a-z])(?=.*[@#$%^&+=]).*$/).test(password)
  
  const doSubmit = () => {
    var elements = document.getElementById("myForm").elements;
    let emptyFields = false;
    for (var i = 0, element; element = elements[i++];) {
        if (element.value === "" || $(element.nextElementSibling).length)   
            emptyFields = true;
    }
    emptyFields ? alert('Some fields are missing or Invalid') : alert('Data submitted successfully');
      return false;
  }


  
