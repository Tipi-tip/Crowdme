//Menu

menu.onclick = function myFunction(){
    let x = document.getElementById('myTopnav');

    if(x.className === 'topnav'){
        x.className += ' responsive';
    }else{
        x.className = 'topnav';
    }
}



//Slider

const images = document.querySelectorAll('.slider .slider_line .slider_item');
const sliderLine = document.querySelector('.slider_line');
const sliderNext = document.querySelector('.slider_next');
const sliderPrev = document.querySelector('.slider_prev');

let count = 0;
let width;

function init(){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
    });
    rollSlider();
}


window.addEventListener('resize', init);
init();

document.querySelector('.slider_next').addEventListener('click', function(){
    count++;
    if(count >= images.length){
        count = 0;
    }

    rollSlider();
    checkBtns();
});

document.querySelector('.slider_prev').addEventListener('click', function(){
    count--;
    if(count < 0){
        count = images.length - 1;
    }

    rollSlider();
    checkBtns();
});


function rollSlider(){
    sliderLine.style.transform = 'translate(-'+ count * width + 'px)';
}

const checkBtns = () => {
    sliderPrev.disabled = count === 0;
    sliderNext.disabled = count => images.length;
};

checkBtns();


// TABS

const tabsBtn = document.querySelectorAll('.tabs_btn');
const tabsItems = document.querySelectorAll('.tabs_item');

tabsBtn.forEach(function(item){
    item.addEventListener('click', function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentId = document.querySelector(tabId);


        tabsBtn.forEach(function(item){
            item.classList.remove('active');
        });

        tabsItems.forEach(function(item){
            item.classList.remove('active');
        })

        currentBtn.classList.add('active');
        currentId.classList.add('active');
    });
});





