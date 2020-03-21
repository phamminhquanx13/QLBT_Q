var images = [
    "img/a.png",
    "img/b.png",
    "img/c.png",
    "img/d.png",
    "img/e.png",
    "img/g.png",
    "img/h.png",


];
var dem = 0;

function next() {
    var slider = document.getElementById("slidershow");
    dem++;
    if (dem >= images.length) {
        dem = 0;
    }
    slider.src = images[dem];
}

function truoc() {
    var slider = document.getElementById("slidershow");
    dem--;
    if (dem < 0) {
        dem = images.length - 1;
    }
    slider.src = images[dem];
}