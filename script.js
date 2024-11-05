const images = ['images/russell.jpg','images/homers.png', 'images/es.png'];

const randomImage = images[Math.floor(Math.random() * images.length)]; // this don't need an arrow function
const randomProjectImg = document.querySelector(".random_image");  // query image element
randomProjectImg.src = randomImage // setting src image value to randomImage

// 

const jsonAbout = ` { 
    "title": "Elijah Suyat",
    "about": "I’m currently on my journey to becoming a software developer. Passionate about coding and eager to learn, I am open to new job opportunities where I can grow and contribute to exciting projects.",
    "cover_image": "images/me.jpg"
} `

const parsedAbout = JSON.parse(jsonAbout);

const displayAbout = () => {
    const aboutSection = document.querySelector('.about_me_content');

    const profileImage = aboutSection.querySelector('.profile_image');
    profileImage.src = parsedAbout.cover_image;
    profileImage.alt = `Cover image of ${parsedAbout.title}`;

    const textAbout = aboutSection.querySelector('.text_about p');
    textAbout.innerHTML = parsedAbout.about;
    
}

displayAbout();

//


