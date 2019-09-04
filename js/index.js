document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
var landt = 0;
var left = 0;
function sliderLeft() {
    var polosa = document.getElementById('polosa');
    var land = document.getElementById('landth');
    left = left -248;
    landt = landt +49;
    if (landt > 196){
        landt = 0
    }
    if (left < -992) {
        left = 0;
    }
    land.style.left = landt+'px';
    polosa.style.left = left+'px';
    
}
function sliderRight(){
    var land = document.getElementById('landth');
    var polosa = document.getElementById('polosa');
    landt = landt -49;
    left = left +248;
    if (landt < 0){
        landt = 196;
    }
    if (left > 0) {
        left = -992;
    }
    land.style.left = landt+'px';
    polosa.style.left = left+'px';
}