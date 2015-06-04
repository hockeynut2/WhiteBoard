var canvas = document.getElementById('canvas');
var brush = canvas.getContext('2d');

brush.fillStyle = 'white';
brush.fillRect(0, 0, canvas.width, canvas.height);

brush.beginPath();
brush.rect(200, 50, 400, 200);
brush.fillStyle = 'yellow';
brush.fill();

function clearCanvas() {
    brush.clearRect(0, 0, canvas.width, canvas.height);
    brush.fillStyle = 'white';
    brush.fillRect(0, 0, canvas.width, canvas.height);
}

function downloadImg() {
    var img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = img;
}

//
//$('li a.opt').click(function(){
//    var value = $(this).text();
//    $('a.dropdown-toggle').html(value);
//    $('a.dropdown-toggle').append('<span class="caret">'+'</span>');
//});

function drawDot(brush, x,y) {
    // Let's use black by setting RGB values to 0, and 255 alpha (completely opaque)
    r=0; g=0; b=0; a=255;

    // Select a fill style
    brush.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    // Draw a filled circle
    brush.beginPath();
    brush.arc(x, y, size, 0, Math.PI*2, true);
    brush.closePath();
    brush.fill();
}

var mouseX, mouseY, mouseDown = 0;
function canvas_mouseDown() {
    mouseDown = 1;
    drawDot(brush, mouseX, mouseY)
}

function canvas_mouseUp() {
    mouseDown = 0;
}

function canvas_mouseMove(e) {
    getMousePos(e);
    if (mouseDown == 1) {
        drawDot(brush, mouseX, mouseY)
    }
}

function getMousePos(e) {
    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    } else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
}

canvas.addEventListener('mousedown', canvas_mouseDown, false);
canvas.addEventListener('mousemove', canvas_mouseMove, false);
window.addEventListener('mouseup', canvas_mouseUp, false);