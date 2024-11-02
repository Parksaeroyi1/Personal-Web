const images = ['images/russell.jpg','images/homers.png', 'images/es.png'];


const image = () => {
    return images[Math.floor(Math.random() * images.length)];
};

document.getElementById("randomProjectImage");