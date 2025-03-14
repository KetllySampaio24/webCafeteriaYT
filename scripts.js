/* Logica de Programação
    [x] Saber quando o usuario clicou no botão
    [x] Mudar o posicionamento do MODAL
    [x] Fazer mascara ficar visivel
    [ ] Quando clicar na mascara, fechar o MODAL
*/

const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-endereco")


function mostrarModal(){
    modal.style.left = '50%'
    mascara.style.visibility = 'visible'
}
function esconderModal(){
    modal.style.left = '-30%'
    mascara.style.visibility = 'hidden'

}