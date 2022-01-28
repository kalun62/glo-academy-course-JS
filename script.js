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

