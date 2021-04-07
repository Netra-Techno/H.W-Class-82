var Mouse_Event = "empty";
canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
radius = 75;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown() {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    Mouse_Event = "mousedown";
}
canvas.addEventListener("mouseUP", my_mouseUp);

function my_mouseUp(e) {
    Mouse_Event = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    Mouse_Event = "mouseleave";
    canvas.addEventListener("mousemove", my_mousemove);

    function my_mousemove(e) {
        Mouse_Event = "mousemove";
        if (Mouse_Event == "mousedown") {
            function my_mousedown(e) {
                color = document.getElementById("colour").value;
                console.log(colour);
                mouseX = e.clientX - canvas.offSetLeft;
                mouseY = e.clientY - canvas.offSetTop;
                console.log("X =" + mouseX + "Y =" + mouseY);
                circle(mouseX, mouseY);
            }

            function circle() {
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
                ctx.stroke();
            }
        }
    }

    