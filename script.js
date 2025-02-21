const fullImgBox = document.getElementById("fullImgBox");

const fullImg = document.getElementById("fullImg");

function openimg(Picture){
    fullImgBox.style.display = 'flex';
    fullImg.src = Picture;
}

function closeimg(){
    fullImgBox.style.display = 'none';
}