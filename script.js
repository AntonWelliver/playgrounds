

function changeBackground() {
    
    var style = document.body.style;

    if (document.body.style.backgroundColor == "red") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "red";
    }

    console.log("It works!");
}

