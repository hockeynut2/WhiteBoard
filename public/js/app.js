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

$(document).ready(function() {
    $(".dropdown-toggle").click(function(ev) {
        $(".dropdown-toggle").dropdown("toggle");
        return false;
    });
    $("ul.dropdown-menu a").click(function(ev) {
        $("a.dropdown-toggle").dropdown("toggle");
        return false;
    });
});