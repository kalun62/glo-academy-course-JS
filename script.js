'use strict';

let title
let screens
let screenPrice
let adaptive
let rollback = 10;
let fullPrice 
let servicePercentPrice
let allServicePrices
let service1
let service2

const isNumber = function(num){
    return !isNaN(parseFloat(num) && isFinite(num))
}

const asking = function(){
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')

    screenPrice = prompt('Сколько будет стоить данная работа?')
    
    do {

        screenPrice = prompt('Сколько будет стоить данная работа?')

    } while(!isNumber(screenPrice)){

        screenPrice = prompt('Сколько будет стоить данная работа?')
    }
    
    adaptive =  confirm('Нужен ли адаптив на сайте?')
}


const getAllServicePrices = function(){
    let sum = 0

    for( let i = 0; i < 2; i++){

        if (i === 0){
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'Калькулятор')
        }else if (i === 1){
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'модулятор')
        }

        while(!isNumber(sum)){
            sum = prompt('Сколько это будет стоить?')
        }
        
        sum += +prompt('Сколько это будет стоить?')
    }

    return sum
} 

const showTypeOf = function(variable){
    console.log(variable, typeof variable);
}

function getFullPrice(){
    return  screenPrice + allServicePrices
}

let getServicePercentPrices = function(){
    return  fullPrice - (fullPrice * (rollback / 100))
}

const getTitle = function(){
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
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

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice)); // сообщение о скидке пользователю
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens. length);
console.log(servicePercentPrice);
console.log(screens.split(', ')); // массив screens 



console.log('Процент отката посреднику за работу' + ' ' + servicePercentPrice);



