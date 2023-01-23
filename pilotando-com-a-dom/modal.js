const divModal = document.querySelector('.modal-wrapper')
const btnOpenModal = document.getElementById('openModal')

btnOpenModal.onclick = function () {
  divModal.classList.remove('invisible')
}

document.addEventListener('keydown', function (event) {
  const isEscKey = event.key === 'Escape'

  if (isEscKey) {
    divModal.classList.add('invisible')
  }
})
