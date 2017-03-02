
function translate (){
  var title =document.getElementById('form-signin-heading');
  var email =document.getElementById('inputEmail');
  var password =document.getElementById('inputPassword');
  var remember = document.getElementsByTagName('span')[0];
  var button =document.getElementsByClassName('btn')[0];
  var records = document.getElementById('records') ;

  title.innerHTML ="Por favor inicia sesión";
  email.placeholder ="Correo Electronico";
  password.placeholder="Contraseña";
  remember.innerHTML="Recordar datos";
  button.innerHTML="Inicar Sesión";
  records.innerHTML="<h3><p>Datos del formulario</p></h3>"+"<p>El correo electronico ingresado es : </p>"+ "<p>"+
  email.value +"</p>"+"<p>La clave ingresada es </p>" + password.value ;
} ;
  //var emailva =document.getElementById('inputEmail').value;
  //var passwordva =document.getElementById('inputPassword').value ;
function listo(){
  translate();
};
