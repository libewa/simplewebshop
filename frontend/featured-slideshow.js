var currentSlideshowElement = 0;
const lastSlideshowElement = 2;

document.getElementById("featured-slideshow_0").style.display = "block";
document.getElementById("featured-slideshow_prev").onclick = () => {
    if (currentSlideshowElement === 0) {
        currentSlideshowElement = lastSlideshowElement;
        document.getElementById("featured-slideshow_0").style.display = "none";
        document.getElementById(`featured-slideshow_${lastSlideshowElement}`).style.display = "block";
    } else {
        document.getElementById(`featured-slideshow_${currentSlideshowElement}`).style.display = "none";
        currentSlideshowElement -= 1;
        document.getElementById(`featured-slideshow_${currentSlideshowElement}`).style.display = "block";
    }
    console.log(currentSlideshowElement);
}

document.getElementById("featured-slideshow_next").onclick = () => {
    if (currentSlideshowElement === lastSlideshowElement) {
        currentSlideshowElement = 0;
        document.getElementById(`featured-slideshow_${lastSlideshowElement}`).style.display = "none";
        document.getElementById("featured-slideshow_0").style.display = "block";
    } else {
        document.getElementById(`featured-slideshow_${currentSlideshowElement}`).style.display = "none";
        currentSlideshowElement += 1;
        document.getElementById(`featured-slideshow_${currentSlideshowElement}`).style.display = "block";
    }
    console.log(currentSlideshowElement);
}