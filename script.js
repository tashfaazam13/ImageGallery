// Get the full image container
const fullImgBox = document.getElementById("fullImgBox");

// Get the image element inside the container
const fullImg = document.getElementById("fullImg");

// Function to open the full image viewer
function openimg(Picture) {
    fullImgBox.style.display = 'flex';
    // Set the selected image source
    fullImg.src = Picture;
    // Add class for styling or animation
    fullImgBox.classList.add("fullImg img");
}

// Function to close the full image viewer
function closeimg() {
    fullImgBox.style.display = 'none';
}

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

// Array of image paths
let images = ["images/img1.png", "images/img2.jpg", "images/img3.webp", "images/img4.webp", "images/img5.jpg", "images/img6.webp", "images/img7.jpeg", "images/img8.webp", "images/img9.jpeg", "images/img10.jpg", "images/img11.jpeg", "images/img12.jpeg"];

// Track the currently displayed image index
let CurrentIndex = 0;

// Function to update the displayed image based on CurrentIndex
function UpdateImage() {
    // Change the image source
    fullImg.src = images[CurrentIndex];
}

// Event listener for the previous button
prev.addEventListener("click", () => {
    console.log("Prev button clicked!");

    if (CurrentIndex > 0) {
        // Move to the previous image
        CurrentIndex--;
    } else {
        // Loop back to the last image if at the first one
        CurrentIndex = images.length - 1;
    }

    console.log("CurrentIndex after:", CurrentIndex);
    // Update the displayed image
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