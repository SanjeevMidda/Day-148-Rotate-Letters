let h1 = document.querySelectorAll('h1');

for(i=0; i<h1.length; i++){
    h1[i].addEventListener('click', rotate);
}

function rotate(){
    this.classList.toggle('rotate');
}