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


//function loadImg(e) {
//    var reader = new FileReader;
//    reader.onload = function(event) {
//        var img = new Image;
//        img.onload = function() {
//            brush.drawImage(img, 0, 0, canvas.width, canvas.height)
//        };
//        img.src = event.target.result
//    };
//}
//
//document.getElementById('imageLoader').addEventListener('change', loadImg, false);


//$('li a.opt').click(function(){
//    var value = $(this).text();
//    $('a.dropdown-toggle').html(value);
//    $('a.dropdown-toggle').append('<span class="caret">'+'</span>');
//});