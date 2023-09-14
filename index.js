let loader = document.getElementById('preloader');
window.addEventListener('load', ()=> {loader.style.display='none';});

let activeIndex = 0;

const groups = document.getElementsByClassName("card_group");

const nextClick=()=>{
        const nextIndex = activeIndex + 1 <= groups.length - 1 ?activeIndex + 1 : 0;
        const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
                nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        currentGroup.dataset.status ="after";
        nextGroup.dataset.status = "becoming-active-from-before";

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
        
        setTimeout(()=>{
        nextGroup.dataset.status = "active";
        activeIndex=nextIndex;
        });
}
/*
const choose=()=>{
        const select = document.querySelector(`[data-index="${activeIndex}"]`);
        select.dataset.view = "1";
        document.querySelector(".card_deck").dataset.view ="1";
        document.querySelector(".card_viewer").dataset.view ="1";
}

const compact=()=>{
        const select = document.querySelector(`[data-index="${activeIndex}"]`);
        select.dataset.view = "0";
        document.querySelector(".card_deck").dataset.view ="0";
        document.querySelector(".card_viewer").dataset.view ="0";
}
*/