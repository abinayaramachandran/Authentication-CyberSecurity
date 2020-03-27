if(document.getElementById("register") !== null){
document.getElementById("register").innerHTML = "welcome"+ sessionStorage.getItem("firstname");
}

function getLocation() {
	alert("test");
var x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, errorShow);
         } 
else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
     }
}

function showPosition(position) {
var x = document.getElementById("demo");
        x.innerHTML = "Latitude: " + position.coords.latitude + 
                      "<br>Longitude: " + position.coords.longitude;	

}

function errorShow(){
	var x = document.getElementById("demo");
	x.innerHTML = "User blocked the location";
}


function storageLocal(){

alert("checking for session storage");
if (typeof(Storage) !== "undefined") {
var fname = document.getElementById('firstname').value;
alert(fname);
   sessionStorage.setItem("firstname", fname);
   
} else {
    document.getElementById("register").innerHTML = "Sorry, your browser does not support Web Storage...";
}


}
