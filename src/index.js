const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
//const dd = document.querySelector('#dd');
const Adbtn = document.querySelector('#Adbtn');
const address = document.querySelector('#address');
const Lnbtn = document.querySelector('#Lnbtn');
const link = document.querySelector('#link');
const ln = document.querySelector('#ln');
const ad = document.querySelector('#ad');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
       // dd.classList.add('hidden');
    }else{
        menu.classList.add('hidden');
       // dd.classList.remove('hidden');   
     }

})

Lnbtn.addEventListener('click', () => {
    if (link.classList.contains('hidden')){
        link.classList.remove('hidden');
        ln.classList.remove('hidden');
        address.classList.add('hidden');
        ad.classList.add('hidden');
       
    }//else{
      //  menu.classList.add('hidden');
         
    // }

})

Adbtn.addEventListener('click', () => {
    if (address.classList.contains('hidden')){
        address.classList.remove('hidden');
        ad.classList.remove('hidden');
        link.classList.add('hidden');
        ln.classList.add('hidden');
       
    }//else{
      //  menu.classList.add('hidden');
         
    // }

})

