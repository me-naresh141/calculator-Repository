let button = document.querySelectorAll('button')
let input = document.querySelector('input')
function handler(event) {
  if (event.target.innerText === '=') {
    input.value = eval(input.value)
  } else if (event.target.innerText === 'C') {
    input.value = ''
  } else {
    input.value += event.target.innerText
  }
}
button.forEach((btn) => {
  btn.addEventListener('click', handler)
})
