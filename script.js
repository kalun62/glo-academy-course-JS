'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive=  confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1=  +prompt('Сколько это будет стоить?');
let service2=  prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.floor(fullPrice - rollback);
let allServicePrices = ''


const showTypeOf = function(variable){
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price){
    if(price >= 30000){
        return 'Даем скидку в 10%'
    } else if(price >= 15000 && price < 30000){
        return 'Даем скидку в 5%';
    } else if(price < 15000){
        return 'Скидка не предусмотрена';
    }else if(price < 0){
        return 'Что то пошло не так';
    }
}

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

const getAllServicePrices = function(servPriceOne, servPriceTwo){
   return servPriceOne + servPriceTwo
} 

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2)

function getFullPrice(priceScreen, priceServiceAll){
     return  priceScreen + priceServiceAll
}

fullPrice = getFullPrice(screenPrice, allServicePrices)

const getTitle = function(head){
    let tit = head.trim()
    return tit.charAt(0).toUpperCase() + tit.slice(1).toLowerCase()
}

title = getTitle(title)

let getServicePercentPrices = function(priceFull, roll){
   return  priceFull - roll
}

servicePercentPrice = getServicePercentPrices(fullPrice, rollback)


console.log(screens.split(', ')); // массив screens 

console.log(getRollbackMessage(fullPrice)); // сообщение о скидке пользователю

console.log('Процент отката посреднику за работу' + ' ' + servicePercentPrice);



