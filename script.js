'use strict';

const book = document.querySelectorAll('.book')
const body = document.querySelector('body')
const adv = document.querySelector('.adv')
const textBook3 = book[4].querySelector('h2 > a')
const partBook3 = book[0].querySelectorAll('li')
const partBook5 = book[5].querySelectorAll('li')
const partBook6 = book[2].querySelectorAll('li')

book[1].after(book[0])
book[0].after(book[4])
book[5].after(book[2])

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

adv.remove()

textBook3.textContent = "Книга 3. this и Прототипы Объектов"

partBook3[9].after(partBook3[2])
partBook3[3].after(partBook3[6])
partBook3[6].after(partBook3[8])

partBook5[3].before(partBook5[9])
partBook5[6].before(partBook5[2])
partBook5[8].before(partBook5[5])

let part = document.createElement('li')
part.textContent = 'Глава 8: За пределами ES6'

partBook6[8].append(part)