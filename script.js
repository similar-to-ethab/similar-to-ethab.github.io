document.getElementById("layer1").style.color = "blue";
var n1 = 0;
var n2 = 95;

var n3 = 159;
function componentToHex(c) {
var hex = c.toString(16);
return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
var intervalColor;
function change_color(){

        if (n1 == 255)
        {
            n1 = 0;
            n2+=1;
            n3+=1;
            console.log("red==0")
        }
        else if (n2==255)
        {
            n1++;
            n2=0;
            n3++;
        }
        else if (n3==255)
        {
            n1++;
            n2++;
            n3=0;
        }
        else
        {
            n1++;
            n2++;
            n3++;
        }
    console.log(n1);
        /*console.log(n1);
        console.log(n2);
        console.log(n3);
        console.log(rgbToHex(n1,n2,n3));*/
        document.getElementById("layer1").style.backgroundColor = rgbToHex(n1,n2,n3); //rgb(n1,n2,n3);

}
