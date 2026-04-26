// IMAGE CAROUSEL
let images = [
    "https://picsum.photos/600/300?1",
    "https://picsum.photos/600/300?2",
    "https://picsum.photos/600/300?3"
];

let index = 0;

function showImage() {
    document.getElementById("carouselImage").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

// AUTO SLIDE
setInterval(nextImage, 3000);

// API FETCH (JOKE)
async function getJoke() {
    let res = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await res.json();

    document.getElementById("joke").textContent =
        data.setup + " - " + data.punchline;
}
function toggleTheme() {
    document.body.classList.toggle("light");

    let btn = document.querySelector("header button");
    if (document.body.classList.contains("light")) {
        btn.textContent = "☀️ Light Mode";
    } else {
        btn.textContent = "🌙 Dark Mode";
    }
}