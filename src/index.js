const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
//const dd = document.querySelector('#dd');
const Adbtn = document.querySelector('#Adbtn');
const address = document.querySelector('#address');
const Lnbtn = document.querySelector('#Lnbtn');
const link = document.querySelector('#link');
const ln = document.querySelector('#ln');
const ad = document.querySelector('#ad');
const Tbtn = document.querySelector('#Tbtn');
const Tb = document.querySelector('#Tb');
const Nbtn = document.querySelector('#Nbtn');
const Nb= document.querySelector('#Nb');
const Tokens = document.querySelector('#Tokens');
const Ntfs = document.querySelector('#Ntfs');
const dd = document.querySelector('#dd');
const asid = document.querySelector('#asid');
const eth = document.querySelector('#eth');
const back = document.querySelector('#back');

back.addEventListener('click', () => {
    if (dd.classList.contains('z-1')){
        dd.classList.remove('z-1');
        asid.classList.add('z-1');
       // dd.classList.add('hidden');
    }// dd.classList.remove('hidden');   
     }
)

eth.addEventListener('click', () => {
    if (asid.classList.contains('z-1')){
        asid.classList.remove('z-1');
        dd.classList.add('z-1');
       // dd.classList.add('hidden');
    }// dd.classList.remove('hidden');   
     }
)


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
      //  menu.classList.add('hidden');    // }

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

Nbtn.addEventListener('click', () => {
    if (Ntfs.classList.contains('hidden')){
        Ntfs.classList.remove('hidden');
        Nb.classList.remove('hidden');
        Tokens.classList.add('hidden');
        Tb.classList.add('hidden');
       
    }//else{
      //  menu.classList.add('hidden');    // }

})

Tbtn.addEventListener('click', () => {
    if (Tokens.classList.contains('hidden')){
        Tokens.classList.remove('hidden');
        Tb.classList.remove('hidden');
        Ntfs.classList.add('hidden');
        Nb.classList.add('hidden');
       
    }//else{
      //  menu.classList.add('hidden');
         
    // }

})

