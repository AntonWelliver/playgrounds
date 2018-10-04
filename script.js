

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
    
    document.body.style.background = bgColor;
} 

/*     setInterval(random_bg_color, 1000); */

function randomBackgroundColor() {
    var red1 = Math.floor(Math.random() * 9);
    var red2 = Math.floor(Math.random() * 9);
    var green1 = Math.floor(Math.random() * 9);
    var green2 = Math.floor(Math.random() * 9);
    var blue1 = Math.floor(Math.random() * 9);
    var blue2 = Math.floor(Math.random() * 9);
    var bgColor = "#" + red1 + red2 + green1 + green2 + blue1 + blue2;
    
    document.body.style.background = bgColor;
}