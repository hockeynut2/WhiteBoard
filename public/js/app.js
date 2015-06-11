/* Inital setup */
var canvas = document.getElementById('canvas');
var brush = canvas.getContext('2d');

brush.fillStyle = 'white';
brush.fillRect(0, 0, canvas.width, canvas.height);

/* Function for Clear button */
function clearCanvas() {
    brush.clearRect(0, 0, canvas.width, canvas.height);
    brush.fillStyle = 'white';
    brush.fillRect(0, 0, canvas.width, canvas.height);
}

/* Function for Save button */
function downloadImg() {
    var img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = img;
}

/* Function and Event Listener for Insert Image button */
document.getElementById("imageLoader").addEventListener("change", handleImage, false);

function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            brush.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}
/* Marker Drawing */
var mouse = {x: 0, y: 0};

/* Mouse Capturing Work */
canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
}, false);

/* Drawing on White Board App */
brush.lineWidth = 5;
brush.lineJoin = 'round';
brush.lineCap = 'round';
brush.strokeStyle = 'black';

/* Event listener work */

function onPaint() {
    brush.lineTo(mouse.x, mouse.y);
    brush.stroke();
}

function paintStart() {
    brush.beginPath();
    brush.moveTo(mouse.x, mouse.y);

    canvas.addEventListener('mousemove', onPaint, false);
}

/* Marker on/off */

function marker() {
    document.getElementById('white').removeEventListener('click', fillWhite);
    document.getElementById('red').removeEventListener('click', fillRed);
    document.getElementById('orange').removeEventListener('click', fillOrange);
    document.getElementById('yellow').removeEventListener('click', fillYellow);
    document.getElementById('green').removeEventListener('click', fillGreen);
    document.getElementById('blue').removeEventListener('click', fillBlue);
    document.getElementById('purple').removeEventListener('click', fillPurple);
    document.getElementById('black').removeEventListener('click', fillBlack);

    document.getElementById('white').addEventListener('click', colorWhite);
    document.getElementById('red').addEventListener('click', colorRed);
    document.getElementById('orange').addEventListener('click', colorOrange);
    document.getElementById('yellow').addEventListener('click', colorYellow);
    document.getElementById('green').addEventListener('click', colorGreen);
    document.getElementById('blue').addEventListener('click', colorBlue);
    document.getElementById('purple').addEventListener('click', colorPurple);
    document.getElementById('black').addEventListener('click', colorBlack);

    $('#canvas').unbind('mousedown');

    canvas.addEventListener('mousedown', paintStart);

    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);
}

/* Rectangle work */
var isDrawing = false;
var startX;
var startY;

function dynamicRect(e) {
    var mouseX = parseInt(e.clientX - canvas.offsetLeft);
    var mouseY = parseInt(e.clientY - canvas.offsetTop);
    if (isDrawing) {
        isDrawing = false;
        brush.beginPath();
        brush.rect(startX, startY, mouseX - startX, mouseY - startY);
        brush.fill();
        brush.stroke();
        canvas.style.cursor = "default";
    } else {
        isDrawing = true;
        startX = mouseX;
        startY = mouseY;
        canvas.style.cursor = "crosshair";
    }
}
function rectangleDrawer() {
    document.getElementById('white').removeEventListener('click', colorWhite);
    document.getElementById('red').removeEventListener('click', colorRed);
    document.getElementById('orange').removeEventListener('click', colorOrange);
    document.getElementById('yellow').removeEventListener('click', colorYellow);
    document.getElementById('green').removeEventListener('click', colorGreen);
    document.getElementById('blue').removeEventListener('click', colorBlue);
    document.getElementById('purple').removeEventListener('click', colorPurple);
    document.getElementById('black').removeEventListener('click', colorBlack);

    document.getElementById('white').addEventListener('click', fillWhite);
    document.getElementById('red').addEventListener('click', fillRed);
    document.getElementById('orange').addEventListener('click', fillOrange);
    document.getElementById('yellow').addEventListener('click', fillYellow);
    document.getElementById('green').addEventListener('click', fillGreen);
    document.getElementById('blue').addEventListener('click', fillBlue);
    document.getElementById('purple').addEventListener('click', fillPurple);
    document.getElementById('black').addEventListener('click', fillBlack);

    canvas.removeEventListener('mousedown', function(e) {
        brush.beginPath();
        brush.moveTo(mouse.x, mouse.y);

        canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.removeEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);


    brush.strokeStyle = 'black';
    brush.lineWidth = 5;
    $('#canvas').mousedown(function (e) {
        dynamicRect(e);
    });
}

/* Color changers */
function colorRed() {
    brush.strokeStyle = 'red';
    brush.lineWidth = 5;
}

function colorOrange() {
    brush.strokeStyle = 'orange';
    brush.lineWidth = 5;
}

function colorYellow() {
    brush.strokeStyle = 'yellow';
    brush.lineWidth = 5;
}

function colorGreen() {
    brush.strokeStyle = 'green';
    brush.lineWidth = 5;
}

function colorBlue() {
    brush.strokeStyle = 'blue';
    brush.lineWidth = 5;
}

function colorPurple() {
    brush.strokeStyle = 'purple';
    brush.lineWidth = 5;
}

function colorBlack() {
    brush.strokeStyle = 'black';
    brush.lineWidth = 5;
}

function colorWhite() {
    brush.strokeStyle = 'white';
    brush.lineWidth = 5;
}

/* Eraser */

function colorEraser() {
    brush.strokeStyle = 'white';
    brush.lineWidth = 50;
}

marker();

/* Rectangle fillers */
function fillRed() {
    brush.fillStyle = 'red';
}

function fillOrange() {
    brush.fillStyle = 'orange';
}

function fillYellow() {
    brush.fillStyle = 'yellow';
}

function fillGreen() {
    brush.fillStyle = 'green';
}

function fillBlue() {
    brush.fillStyle = 'blue';
}

function fillPurple() {
    brush.fillStyle = 'purple';
}

function fillBlack() {
    brush.fillStyle = 'black';
}

function fillWhite() {
    brush.fillStyle = 'white';
}