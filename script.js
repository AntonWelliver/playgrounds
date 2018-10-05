

function changeBackground() {
    
    /* var style = document.body.style; */

    if (document.body.style.background == "red") {
        document.body.style.background = "white";
    } else {
        document.body.style.background = "red";
    }

}

function random_bg_color() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var bgvalue = "rgb(" + red + "," + green + "," + blue + ")";
    
    document.body.style.background = bgvalue;
}
/*     setInterval(random_bg_color, 1000); */

function randomBackgroundColor() {
    var red1 = convertToHex(Math.round(Math.random() * 15));
    var red2 = convertToHex(Math.round(Math.random() * 15));
    var green1 = convertToHex(Math.round(Math.random() * 15));
    var green2 = convertToHex(Math.round(Math.random() * 15));
    var blue1 = convertToHex(Math.round(Math.random() * 15));
    var blue2 = convertToHex(Math.round(Math.random() * 15));


    var bgvalue = "#" + red1 + red2 + green1 + green2 + blue1 + blue2;
    document.body.style.background = bgvalue;
}

function convertToHex(value) {
    if (value == 10) {
        value ="A";
    } else if (value == 11) {
        value = "B";
    } else if (value == 12) {
        value = "C";
    } else if (value == 13) {
        value = "D";
    } else if (value == 14) {
        value = "E";
    } else if (value == 15) {
        value = "F";
    }

    return value;
}