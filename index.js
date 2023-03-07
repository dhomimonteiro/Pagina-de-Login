var loginTrigger = document.getElementById("login");
var form = document.getElementsByClassName("formulario");

function myFunction() {
    var x = document.getElementById("myInput");
    if  (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}