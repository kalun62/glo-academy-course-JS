'use strict';

let  title = 'glo-academy-course-JS',
     screens = 'Простые, Сложные, Интерактивные',
     screenPrice = 1276,
     rollback = 56,
     fullPrice = 3000000,
     adaptive = true;

console.log(typeof title);

console.log(typeof fullPrice);

console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость верстки экранов' + ' ' + screenPrice + ' '  + 'рублей/ долларов/гривен/юани');

console.log('Стоимость разработки сайта' + ' ' + fullPrice + ' '  + 'рублей/ долларов/гривен/юани');

console.log(screens.toLowerCase().split(', '));

console.log('Процент отката посреднику за работу' + ' ' + (fullPrice * (rollback/100)));


//lesson 3

title = prompt('Как называется ваш проект?');

screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

screenPrice = +prompt('Сколько будет стоить данная работа?');

adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.floor(fullPrice - rollback);

console.log(servicePercentPrice);

if(fullPrice >= 30000){
    alert('Даем скидку в 10%');
} else if(fullPrice >= 15000 && fullPrice < 30000){
    alert('Даем скидку в 5%');
} else if(fullPrice < 15000){
    alert('Скидка не предусмотрена');
}else if(fullPrice < 0){
    alert('Что то пошло не так');
}


