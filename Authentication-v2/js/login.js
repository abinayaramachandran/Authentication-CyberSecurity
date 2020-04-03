var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Pooja" && password == "pooja1996"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else if ( username == "Abinaya" && password == "abinayacsu"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else if ( username == "Nischitha" && password == "nish27"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}