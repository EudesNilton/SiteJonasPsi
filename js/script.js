const menuDiv = document.getElementById('menu_mobile')
const btnAnimar = document.getElementById('btn_menu')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
  menuDiv.classList.toggle('abrir')
  btnAnimar.classList.toggle('ativo')
}