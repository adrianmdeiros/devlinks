const html = document.documentElement
const switcher = document.querySelector('#switcher')

switcher.onclick = () => html.classList.toggle('light')

