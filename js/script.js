const lang = document.querySelector('.lang')
const drop = document.querySelector('.drop')
const nav = document.querySelector('.nav')
const container = document.querySelector('.container')

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

window.onscroll = () => {
  if(window.scrollY >= 100){
    nav.setAttribute('id', 'fixedNav')
    container.setAttribute('style', 'padding: 100px 0')
  }else{
    nav.setAttribute('id', '')
    container.setAttribute('style', '')
  }
}