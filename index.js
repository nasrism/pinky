let loader = document.getElementById('preloader');
window.addEventListener('load', ()=> {loader.style.display='none';});

let activeIndex = 0;

let text = document.createElement('h2');
text.style.paddingTop = "10Vmin";
text.style.fontSize = "3Vmin";
text.style.textAlign = "center";
text.style.transition = "300ms";

let screenSize = window.innerWidth>400?"use button bellow":"slide";
text.innerHTML = "Please "+screenSize+" to see a pictures.";

let card = document.querySelector(".card_groups");

card.appendChild(text);

const groups = document.getElementsByClassName("card_group");

const nextClick=()=>{
        const nextIndex = activeIndex + 1 <= groups.length - 1 ?activeIndex + 1 : 0;
        const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
                nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        currentGroup.dataset.status ="after";
        nextGroup.dataset.status = "becoming-active-from-before";

        text.style.opacity='0';

        setTimeout(()=>{
        nextGroup.dataset.status = "active";
        activeIndex=nextIndex;
});
}

const backClick=()=>{
        const nextIndex = activeIndex - 1 >= 0 ?activeIndex - 1 : groups.length-1;
        const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
                nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
        
        currentGroup.dataset.status ="before";
        nextGroup.dataset.status = "becoming-active-from-after";

        text.style.opacity='0';

        setTimeout(()=>{
        nextGroup.dataset.status = "active";
        activeIndex=nextIndex;
        });
}

const choose=()=>document.querySelector(".card_swiper").dataset.view ="1";

const compact=()=>document.querySelector(".card_swiper").dataset.view ="0";

//scroll
let scroll = document.querySelector(".slider");

scroll.onscrollend = function () {myFunction()};

centerSlide = () =>{
let height = scroll.scrollWidth - scroll.clientWidth;
scroll.scrollLeft = height/2;
}

  centerSlide();

myFunction=()=> {
  let winScroll = scroll.scrollLeft;
  let height = scroll.scrollWidth - scroll.clientWidth;
  let scrolled = (winScroll / height);
  scrolled>0.7? nextClick():scrolled<.3?backClick():console.log(scrolled);
   
  setTimeout(()=>{
  centerSlide();
        });
};