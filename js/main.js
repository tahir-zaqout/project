// Show Setting Box
let gear = document.querySelector('.fa-gear');
gear.addEventListener('click', () => {
    let settingBox = document.querySelector('.setting-box');
    settingBox.classList.toggle('show')
})
//************************************************** */
//Ceck The Local Storage----
let colorOption = localStorage.getItem('color_option');
if (colorOption !== '') {
    document.documentElement.style.setProperty('--main-color', colorOption);

    document.querySelectorAll('.color-list li').forEach(element => {
        element.classList.remove('active');
        if (element.dataset.color === colorOption) {
            element.classList.add('active')
        }
    });
}

//Change The Color------
const colorli = document.querySelectorAll('.color-list li');
colorli.forEach(li => {

    li.addEventListener('click', (e) => {

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //set the color in local storage
        localStorage.setItem('color_option', e.target.dataset.color)

        //Remove Class Actie from  color-list item
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active')
        });
        e.target.classList.add('active')
    });
});

//Random Background option
const backgElment = document.querySelectorAll('.background-option span');

backgElment.forEach(backg => {

    backg.addEventListener('click', (e) => {

        //Remove Class Actie from  color-list item
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active')
        });
        e.target.classList.add('active')
    });
});
//******************************************************** */
// Change The BG==============
let backgrounds = ['bg-1', 'bg-2', 'bg-3'];

setInterval(() => {
    //random Number---
    let randomNum = Math.floor(Math.random() * backgrounds.length);
    //select the Element===
    let landingPage = document.querySelector('.landing-page');
    //change background
    landingPage.style.backgroundImage = `url('imgs/${backgrounds[randomNum]}.jpg')`;
}, 5000)
//=================================================================================

//Create The Popup---------------
let ourgallery = document.querySelectorAll('.gallery-img img');

// loop on the imgs
ourgallery.forEach(img => {
    img.addEventListener('click', () => {
        let popupOverlay = document.createElement('div');
        popupOverlay.className = 'popup-overlay';
        document.body.appendChild(popupOverlay);
        let popupBox = document.createElement('div');
        popupBox.className = 'popup-box';

        if (img.alt !== null) {
            let headImg = document.createElement('h3');
            headImg.innerText = img.alt;
            popupBox.appendChild(headImg);
        };

        let popupBoxImg = document.createElement('img');
        popupBox.appendChild(popupBoxImg);
        popupBoxImg.src = img.src
        document.body.appendChild(popupBox);
        let closeSpan = document.createElement('span');
        closeSpan.innerText = 'X';
        closeSpan.className = 'close-button';
        popupBox.appendChild(closeSpan);
        closeSpan.addEventListener('click', () => {
            popupBoxImg.parentElement.remove();
            popupOverlay.style.display = 'none';
        })
    })
})