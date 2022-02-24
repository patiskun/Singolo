const sliderContent = document.querySelector('.slider-content');
const sliderImages = document.querySelectorAll('.slider-content img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = sliderImages[0].clientWidth;

sliderContent.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if(counter >= sliderImages.length-1) return;
    sliderContent.style.transition = "transform 0.4s ease-in-out";
    counter++;
    sliderContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    sliderContent.style.transition = "transform 0.4s ease-in-out";
    counter--;
    sliderContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

sliderContent.addEventListener('transitionend', ()=>{
    if(sliderImages[counter].id === 'lastClone'){
        sliderContent.style.transition = "none";
        counter = sliderImages.length-2;
        sliderContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(sliderImages[counter].id === 'firstClone'){
        sliderContent.style.transition = "none";
        counter = sliderImages.length - counter;
        sliderContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

