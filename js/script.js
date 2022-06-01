const indexPage = document.querySelector('.index');
const aktualnosci = document.querySelector('.aktualnosci');
const mapa = document.querySelector('.mapa');
const logoBtn = document.querySelector('.logo')
const main = document.querySelector('.index-container');
const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

indexPage.addEventListener('click', () => {
    if(!main.classList.contains('index')) {
        main.style.opacity = 0;
        main.classList = "";
        main.classList.add('index');
        setTimeout(() => {
            fetch('../indexPage.html')
            .then(response => response.text())
            .then((data) => {
                main.innerHTML = data;
            })
            main.style.opacity = 1; 
        }, 300);
    }
})
logoBtn.addEventListener('click', () => {
    if(!main.classList.contains('index')) {
        main.style.opacity = 0;
        main.classList = "";
        main.classList.add('index');
        setTimeout(() => {
            fetch('../indexPage.html')
            .then(response => response.text())
            .then((data) => {
                main.innerHTML = data;
            })
            main.style.opacity = 1; 
        }, 300);
    }
})
aktualnosci.addEventListener('click', () => {
    if(!main.classList.contains('aktualnosci')) {
        main.style.opacity = 0;
        main.classList = "";
        main.classList.add('aktualnosci');
        setTimeout(() => {
            fetch('../aktualnosci.html')
            .then(response => response.text())
            .then((data) => {
                main.innerHTML = data;
            })
            main.style.opacity = 1; 
        }, 300);
    }
})
mapa.addEventListener('click', () => {
    if(!main.classList.contains('mapa')) {
        main.style.opacity = 0;
        main.classList = "";
        main.classList.add('mapa');
        setTimeout(() => {
            fetch('../mapa.html')
            .then(response => response.text())
            .then((data) => {
                main.innerHTML = data;
            })
            main.style.opacity = 1;
        }, 300);
        
    }
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    menu.classList.toggle('menu-active')
})