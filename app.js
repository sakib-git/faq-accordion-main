const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const para = document.querySelectorAll('.para');

for(let i = 0; i < plus.length; i++){
    plus[i].addEventListener('click', () => {
        plus[i].classList.toggle('hidden');
        minus[i].classList.toggle('hidden');
        para[i].classList.toggle('hidden');
    })
}
for(let i = 0; i < plus.length; i++){
    minus[i].addEventListener('click', () => {
        plus[i].classList.toggle('hidden');
        minus[i].classList.toggle('hidden');
        para[i].classList.toggle('hidden');
    })
}