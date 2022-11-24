const html = document.documentElement;
const canvas = document.getElementById("image-sequence");
const context = canvas.getContext("2d");

const frameCount = 4163;
const currentFrame = index => (
  `./frames/` + '0' + `${index.toString().padStart(4, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=1280;
canvas.height=720;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()

const mySong = document.getElementById("mySong");
const icon = document.getElementById("icon");

icon.onclick = function() {
  if(mySong.paused) {
    mySong.play();
    icon.src = "media/pause.png"
  } else {
    mySong.pause();
    icon.src = "media/play.png"
  }
}