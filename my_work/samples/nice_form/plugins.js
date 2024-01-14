function myFunction() {
    var x = document.getElementById("check");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}