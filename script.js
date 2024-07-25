// Get references to the images
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

// Array to hold the image elements
const images = [img1, img2, img3, img4];

// Index to keep track of the current image
let currentIndex = 0;

// Start the image swiper
const swiper = setInterval(swipeImage, 900); // 0.9 seconds interval

// Function to swipe images
function swipeImage() {
  // Get the index of the next image
  const nextIndex = (currentIndex + 1) % images.length;

  // Apply swipe animation class to current image
  images[currentIndex].classList.add('swipe-animation');

  // After a brief delay, update the images
  setTimeout(() => {
    // Get the source of the next image
    const nextImgSrc = images[nextIndex].src;

    // Set the source of the current image to the next image
    images[currentIndex].src = nextImgSrc;

    // Update the currentIndex
    currentIndex = nextIndex;

    // Remove the swipe animation class
    images[currentIndex].classList.remove('swipe-animation');
  }, 50); // Adjust delay to match the transition time
}

