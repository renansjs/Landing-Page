const btnMobile =  document.getElementById('btn-menu');

function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

function msg(){
  alert("Parabéns, agora você vai receber todas as nossas promoções!")
}

// function action(){
//   let modal =  document.querySelector('.modal');

//   modal.style.display = 'block'
// }