const opener = 'opened';
const menu = 'menu';

const btnGrp = '.btn-group';
const openFavs = document.querySelector(btnGrp);
const menuID = document.getElementById(menu);

openFavs.addEventListener('click', function() {
    if(!menuID.className.includes(opener)){
        menuID.classList.add(opener);
    } else {
        menuID.classList.remove(opener);
    }
    console.log("event listener works");
});