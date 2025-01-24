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
    "images/14.png",
    "images/15.png",
    "images/16.png",
    "images/17.png",
    "images/18.png",
    "images/19.png",
    "images/20.png",
    "images/21.png",
    "images/22.png",
    "images/23.png",
    "images/24.png",
    "images/25.png",
    "images/26.png",
    "images/27.png",
    "images/28.png",
    "images/29.png",
    "images/30.png",
    "images/31.png",
    "images/32.png",
    "images/33.png",
    "images/34.png",
    "images/35.png",
    "images/36.png",
    "images/37.png",
    "images/38.png",
    "images/39.png",
    "images/40.png",
    "images/41.png",
    "images/42.png",
    "images/43.png",
    "images/44.png",
    "images/45.png",
    "images/46.png",
    "images/47.png",
    "images/48.png",
    "images/49.png",
    "images/50.png",
    "images/51.png",
    "images/52.png",
    "images/53.png",
    "images/54.png",
    "images/55.png",
    "images/56.png",
    "images/57.png",
    "images/58.png",
    "images/59.png",
    "images/60.png",
    "images/61.png",
    "images/62.png",
    "images/63.png",
    "images/64.png",
    "images/65.png",
    "images/66.png",
    "images/67.png",
    "images/68.png",
    "images/69.png",
    "images/70.png",
    "images/71.png",
    "images/72.png",
    "images/73.png",
    "images/74.png",
    "images/75.png",
    "images/76.png",
    "images/77.png",
    "images/78.png",
    "images/79.png",
    // "images/80.png"
    // "images/81.png"
    // "images/82.png"
    // "images/83.png"
    // "images/84.png"
    // "images/85.png"
    // "images/86.png"
    // "images/87.png"
    // "images/88.png"
    // "images/89.png"
    // "images/90.png"
    // "images/91.png"
    // "images/92.png"
    // "images/93.png"
    // "images/94.png"
    // "images/95.png"
    // "images/96.png"
    // "images/97.png"
    // "images/98.png"
    // "images/99.png"
    // "images/100.png"
    // "images/101.png"
    // "images/102.png"
    // "images/103.png"
    // "images/104.png"
    // "images/105.png"
    // "images/106.png"
    // "images/107.png"
    // "images/108.png"
    // "images/109.png"
    // "images/110.png"
    // "images/111.png"
    // "images/112.png"
    // "images/113.png"
    // "images/114.png"
    // "images/115.png"
    // "images/116.png"
    // "images/117.png"
    // "images/118.png"
    // "images/119.png"
    // "images/120.png"
    // "images/121.png"
    // "images/122.png"
    // "images/123.png"
    // "images/124.png"
    // "images/125.png"
    // "images/126.png"
    // "images/127.png"
    // "images/128.png"
    // "images/129.png"
    // "images/130.png"
    // "images/131.png"
    // "images/132.png"
    // "images/133.png"
    // "images/134.png"
    // "images/135.png"
    // "images/136.png"
    // "images/137.png"
    // "images/138.png"
    // "images/139.png"
    // "images/140.png"
    // "images/141.png"
    // "images/142.png"
    // "images/143.png"
    // "images/144.png"
    // "images/145.png"
    // "images/146.png"
    // "images/147.png"
    // "images/148.png"
    // "images/149.png"
    // "images/150.png"
    // "images/151.png"
    // "images/152.png"
    // "images/153.png"
    // "images/154.png"
    // "images/155.png"
    // "images/156.png"
    // "images/157.png"
    // "images/158.png"
    // "images/159.png"
    // "images/160.png",
    // "images/161.png",
    // "images/162.png",
    // "images/163.png",
    // "images/164.png",
    // "images/165.png",
    // "images/166.png",
    // "images/167.png",
    // "images/168.png",
    // "images/169.png",
    // "images/170.png",
    // "images/171.png",
    // "images/172.png",
    // "images/173.png"
    // "images/174.png"
    // "images/175.png"
    // "images/176.png"
    // "images/177.png"
    // "images/178.png"
    // "images/279.png"
    // "images/280.png"
    // "images/281.png"
    // "images/282.png"
    // "images/283.png"
    // "images/284.png"
    // "images/285.png"
    // "images/286.png"
    // "images/287.png"
    // "images/288.png"
    // "images/389.png"
    // "images/390.png"
    // "images/391.png"
    // "images/392.png"
    // "images/393.png"
    // "images/394.png"
    // "images/395.png"
    // "images/396.png"
    // "images/397.png"
    // "images/398.png"
    // "images/399.png"
    // "images/400.png"
    // "images/401.png"
    // "images/402.png"
    // "images/403.png"
    // "images/404.png"
    // "images/405.png"
    // "images/406.png"
    // "images/407.png"
    // "images/408.png"
    // "images/409.png"
    // "images/410.png"
    // "images/411.png"
    // "images/412.png"
    // "images/413.png"
    // "images/414.png"
    // "images/415.png"
    // "images/416.png"
    // "images/417.png"
    // "images/418.png"
    // "images/419.png"
    // "images/420.png"
    // "images/421.png"
    // "images/422.png"
    // "images/423.png"
    // "images/424.png"
    // "images/425.png"
    // "images/426.png"
    // "images/427.png"
    // "images/428.png"
    // "images/429.png"
    // "images/430.png"
    // "images/431.png"
    // "images/432.png"
    // "images/433.png"
    // "images/434.png"
    // "images/435.png"
    // "images/436.png"
    // "images/437.png"
    // "images/438.png"
    // "images/439.png"
    // "images/440.png"
    // "images/441.png"
    // "images/442.png"
    // "images/443.png"
    // "images/444.png"
    // "images/445.png"
    // "images/446.png"
    // "images/447.png"
    // "images/448.png"
    // "images/449.png"
    // "images/450.png"
    // "images/451.png"
    // "images/452.png"
    // "images/453.png"
    // "images/454.png"
    // "images/455.png"
    // "images/456.png"
    // "images/457.png"
    // "images/458.png"
    // "images/459.png"
    // "images/460.png"
    // "images/461.png"
    // "images/462.png"
    // "images/463.png"
    // "images/464.png"
    // "images/465.png"
    // "images/466.png"
    // "images/467.png"
    // "images/468.png"
    // "images/469.png"
    // "images/470.png"
    // "images/471.png"
    // "images/472.png"
    // "images/473.png"
    // "images/474.png"
    // "images/475.png"
    // "images/476.png"
    // "images/477.png"
    // "images/478.png"
    // "images/479.png"
    // "images/480.png"
    // "images/481.png"
    // "images/482.png"
    // "images/483.png"
    // "images/483.png"
    // "images/485.png"
    // "images/486.png"
    // "images/487.png"
    // "images/488.png"
    // "images/489.png"
    // "images/490.png"
    // "images/491.png"
    // "images/492.png"
    // "images/493.png"
    // "images/494.png"
    // "images/495.png"
    // "images/496.png"
    // "images/497.png"
    // "images/498.png"
    // "images/499.png"
    // "images/500.png"
    // "images/501.png"
    // "images/502.png"
    // "images/503.png"
    // "images/504.png"
    // "images/505.png"
    // "images/506.png"
    // "images/507.png"
    // "images/508.png"
    // "images/509.png"
    // "images/510.png"
];

// Fungsi untuk memilih foto secara acak
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Validasi array images
if (!images.length) {
    console.error("No images available in the array.");
} else {
    // Cek apakah sudah ada foto tersimpan di sessionStorage
    let selectedImage = sessionStorage.getItem('selectedImage');

    // Validasi apakah foto yang disimpan ada di dalam array images
    if (!selectedImage || !images.includes(selectedImage)) {
        // Jika belum ada atau gambar tidak valid, pilih foto secara acak dan simpan
        selectedImage = getRandomImage();
        sessionStorage.setItem('selectedImage', selectedImage);
    }

    // Set src dari elemen img
    const imageElement = document.getElementById('random-image');
    if (imageElement) {
        imageElement.src = selectedImage;
    } else {
        console.error("Element with id 'random-image' not found.");
    }
}
