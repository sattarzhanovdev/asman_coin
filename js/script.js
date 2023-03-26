const lang = document.querySelector('.lang')
const drop = document.querySelector('.drop')

let isOpened = false;

lang.addEventListener('click', e => {
  e.preventDefault()

  isOpened = !isOpened
  if(isOpened){
    drop.setAttribute('style', 'display: none')
    lang.setAttribute('id', '')
  }else{
    drop.setAttribute('style', 'display: block')
    lang.setAttribute('id', 'selected')
  }
})

