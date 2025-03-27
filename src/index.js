const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
//const dd = document.querySelector('#dd');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
       // dd.classList.add('hidden');
    }else{
        menu.classList.add('hidden');
       // dd.classList.remove('hidden');   
     }

})

