var canvas = document.getElementById('canvas');
var brush = canvas.getContext('2d');

brush.fillStyle = 'white';
brush.fillRect(0, 0, canvas.width, canvas.height);

brush.beginPath();
brush.fillStyle = 'yellow';
brush.fillRect(200, 50, 400, 200);

function clearCanvas() {
    brush.clearRect(0, 0, canvas.width, canvas.height);
    brush.fillStyle = 'white';
    brush.fillRect(0, 0, canvas.width, canvas.height);
}

function downloadImg() {
    var img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = img;
}

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

canvas.addEventListener('mousedown', function(e) {
    brush.beginPath();
    brush.moveTo(mouse.x, mouse.y);

    canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);

var onPaint = function() {
    brush.lineTo(mouse.x, mouse.y);
    brush.stroke();
};