'use strict';

const title = document.getElementsByTagName('h1')[0]
const handleBtn = document.getElementsByClassName('handler_btn')
const screenBtn = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const rollback = document.querySelector('.rollback [type="range"]')
const rangeValue = document.querySelector('.rollback .range-value')
const totalInput1 = document.getElementsByClassName('total-input')[0]
const totalInput2 = document.getElementsByClassName('total-input')[1]
const totalInput3 = document.getElementsByClassName('total-input')[2]
const totalInput4 = document.getElementsByClassName('total-input')[3]
const totalInput5 = document.getElementsByClassName('total-input')[4]
let screen = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    services: {},

    start: function(){
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getTitle()

        appData.logger()
    },
    
    isNumber: function(num){
        return !isNaN(parseFloat(num) && isFinite(num))
    },

    isSting: function(str){
        return isNaN(str)
    },

    asking: function(){
        
        do {
            appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
        }   while (!appData.isSting(appData.title))
            
        for( let i = 0; i < 2; i++){
            let name = 0
            let price = 0

            do{
                name = prompt('Какие типы экранов нужно разработать?') 
            } while (!appData.isSting(name))
            
            do {
                price = prompt('Сколько будет стоить данная работа?', '10000')
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })
        }   

        for( let i = 0; i < 2; i++){
            let name = 0
            let price = 0

            do{
                name = prompt('Какой дополнительный тип услуги нужен?')
            } while (!appData.isSting(name))
        
            do {
                price = prompt('Сколько это будет стоить?', '1000')
            } while(!appData.isNumber(price))
            
            appData.services[i + name] = +price
            
        }
        appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    }, 

    addPrices: function(){
        for(let screen of appData.screens){
            appData.screenPrice += +screen.price
        }

        for(let key in appData.services){
            appData.allServicePrices += appData.services[key]
        }
    },

    getFullPrice: function (){
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices
    },

    getServicePercentPrices: function(){
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    }, 

    getTitle: function(){
        appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },

    getRollbackMessage: function(price){
        if(price >= 30000){
            return 'Даем скидку в 10%'
        } else if(price >= 15000 && price < 30000){
            return 'Даем скидку в 5%';
        } else if(price < 15000){
            return 'Скидка не предусмотрена';
        }else if(price < 0){
            return 'Что то пошло не так';
        }
    }, 

    logger: function(){
      console.log(appData.fullPrice);
      console.log(appData.servicePercentPrice);
      console.log(appData.screens);
    },
}
 
appData.start()





