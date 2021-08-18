/*VALIDATE NAME  FORM*/

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

/*ACCESS FORM*/
function doIt() {
    var elem = document.forms[0];
    for (var i = 0; i < elem.length - 1; i++) {
        var formData = new Array;
        formData[i] = elem[i].value + "<br>";
        document.getElementById("output").innerHTML += formData[i];
    }
}