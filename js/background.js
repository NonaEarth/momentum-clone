const numberOfImages = 3;

let background = function () {

    const images = [ ]
    
    for (let index = 0; index < numberOfImages; index++) {
        images.push(`${index}.jpg`);
    }

    const chosenImage
        = images[Math.floor(Math.random() * images.length)];

    const bgImage = document.createElement('img');

    bgImage.src = `./img/${chosenImage}`;

    document.body.appendChild(bgImage);
}

background();