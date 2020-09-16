
const display = document.querySelector('.display');
const canvas = document.querySelector('.canvas');
const c = canvas.getContext('2d');
let image = new Image();
image.src = 'https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg';

const loadImage = () =>  {
    c.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
}

setTimeout(loadImage, 1000);

const addText = document.querySelector('.addText');
addText.addEventListener('click', () => {
    loadImage();
    let topText = document.querySelector('.topText');
    let bottomText = document.querySelector('.bottomText');
    c.textAlign = 'center';
    c.font = `${Math.floor(0.2 * canvas.height)}px serif`;
    c.fillStyle = document.querySelector('.input-top-color').value;
    c.fillText(topText.value, canvas.width/2, 0.13 * (canvas.height));
    c.fillStyle = document.querySelector('.input-bottom-color').value;
    let color = document.querySelector('.input-bottom-color').value;
    c.fillText(bottomText.value, canvas.width/2, 0.95 * (canvas.height));
});

const uploadButton = document.querySelector('.uploadButton');
uploadButton.addEventListener('click', () => {
    let url = document.querySelector('.uploadImage');
    if(url.value.length) {
        image.src = url.value;
    }
    setTimeout(loadImage, 1000);
});

const updateColorTop = document.querySelector('.input-top-color');
const updateColorBottom = document.querySelector('.input-bottom-color');

const updateColor = () => {
    let topText = document.querySelector('.topText');
    let bottomText = document.querySelector('.bottomText');
    topText.style.color = updateColorTop.value;
    bottomText.style.color = updateColorBottom.value;
}

updateColorTop.addEventListener('change', () => {
    updateColor();
});

updateColorBottom.addEventListener('change', () => {
    updateColor();
});

const createMeme = document.querySelector('.createMeme');
const download = (e) => {
    let canvas2 = document.querySelector('.canvas');

    let img = canvas2.toDataURL('image/jpeg');
    e.href = img;
}
createMeme.addEventListener('click', download, false);





