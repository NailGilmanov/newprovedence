document.querySelector('.fa-bars').onclick = () =>  document.querySelector('.nav-menu').classList.toggle('active');
document.querySelector('.fa-times').onclick = () =>  document.querySelector('.nav-menu').classList.toggle('active');

//Работа с DOM
let   position          =   0;
const slidesToShow      =   1,
      slidesToScroll    =   1,
      container         =   document.querySelector('.slider-container'),
      track             =   document.querySelector('.slider-track'),
      items             =   document.querySelectorAll('.slider-item'),
      itemsCount        =   items.length,
      btnPrev           =   document.querySelector('.btn-prev'), 
      btnNext           =   document.querySelector('.btn-next'),
      itemWidth         =   container.clientWidth / slidesToShow,
      movePosition      =   slidesToScroll * itemWidth;

//Ширина каждого Item
const interval = setInterval(items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
}), 150);

//Btn next
btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
            
    setPosition();
    checkBtns();
})

//Btn prev
btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

//setPosition
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

//checkBtns
const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns()