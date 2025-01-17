// Array foto yang tersedia
const images = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    "images/9.png",
    "images/10.png",
    "images/11.png",
    "images/12.png",
    "images/13.png",
    // "images/14.png"
    // "images/15.png"
    // "images/16.png"
    // "images/17.png"
];

// Fungsi untuk memilih foto secara acak
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Cek apakah sudah ada foto tersimpan di sessionStorage
let selectedImage = sessionStorage.getItem('selectedImage');

if (!selectedImage) {
    // Jika belum ada, pilih foto secara acak dan simpan
    selectedImage = getRandomImage();
    sessionStorage.setItem('selectedImage', selectedImage);
}

// Set src dari elemen img
document.getElementById('random-image').src = selectedImage;
