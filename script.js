const fullImgBox = document.getElementById("fullImgBox");

const fullImg = document.getElementById("fullImg");

function openimg(Picture) {
    fullImgBox.style.display = 'flex';
    fullImg.src = Picture;
    fullImgBox.classList.add("fullImg img");
}

function closeimg() {
    fullImgBox.style.display = 'none';
}

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let images = ["images/img1.png", "images/img2.jpg", "images/img3.webp", "images/img4.webp", "images/img5.jpg", "images/img6.webp", "images/img7.jpeg", "images/img8.webp", "images/img9.jpeg", "images/img10.jpg", "images/img11.jpeg", "images/img12.jpeg"];

let CurrentIndex = 0;

function UpdateImage() {
    fullImg.src = images[CurrentIndex];
}

prev.addEventListener("click", () => {
    console.log("Prev button clicked!");

    if (CurrentIndex > 0) {
        CurrentIndex--;
    } else {
        CurrentIndex = images.length - 1;
    }

    console.log("CurrentIndex after:", CurrentIndex);
    
    UpdateImage();
});

next.addEventListener("click", () => {
    if (CurrentIndex < images.length - 1) {
        CurrentIndex++;
    }
    else {
        CurrentIndex = 0;
    }
    UpdateImage();
})