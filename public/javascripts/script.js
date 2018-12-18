//Cookie
var setCookie = Number(document.cookie); 
if (!setCookie) {document.cookie = 1} {
  setCookie = setCookie + 1;
  document.cookie = setCookie;
}

//Dato og tid
var date = new Date();
document.getElementById("date").innerHTML = date;


//LoginForm
function check(form) {
  if (form.userid.value == "admin" && form.password.value == "123"
  || form.userid.value == "Admin" && form.password.value == "123") {
    window.location.replace('frontpage')
  }
  else {
    alert("Forkert brugernavn eller kodeord ")
  }
}

function vaerdiSet(){
  var x = document.getElementById("input").value
  document.getElementById("demo").innerHTML = x;
}