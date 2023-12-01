var myImage = document.getElementById("image");
var ArrayImage = [  "IMAGE/ariana9.png", "IMAGE/boys.png", "IMAGE/IMG_20200525_181721_035.JPG",];
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", ArrayImage[imageIndex]);
    imageIndex++;

    if (imageIndex >= ArrayImage.length){
        imageIndex = 0;
    }

}


setInterval(changeImage, 3000);