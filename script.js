

function changeBackground() {
    
    var style = document.body.style;

    if (document.body.style.backgroundColor == "red") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "red";
    }

}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }
