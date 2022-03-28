'use strict';

const title = document.getElementsByTagName('h1')[0]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')

const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    screensCount: 0,
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicesPercent: {},
    servicesNumber: {},

    init: function () {
        this.addTitle()
        buttonPlus.addEventListener('click', this.addScreenBlock)
        startBtn.addEventListener('click',  this.resutlAddScreen);
        inputRange.addEventListener('input', this.rollbackInputCount)
    },

    addTitle: function () {
        document.title = title.textContent
    },

    start: function () {
        this.addScreens()
        this.addServices()
        this.addPrices()
        this.showResult()
    },

    addScreens: function () {
        this.screens.length = 0
        screens = document.querySelectorAll('.screen')

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            const count = input.value

            this.screens.push({
                id: index,
                name: selectName,
                count: count,
                price: +select.value * +input.value
            })
        })

        if(this.screens.find(item => item.price === 0)) return false
        else return true
    },

    resutlAddScreen: function() {
        if(appData.addScreens() !== true){
          alert("Не выбран тип или количество экранов");  // доделать this 
        } else  appData.start();
    },

    rollbackInputCount: function() {
        inputRangeValue.textContent = inputRange.value + '%'
        return appData.rollback = inputRange.value              // доделать this 
    },

    addServices: function () {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }
        })

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }
        })
    },

    showResult: function () {
        total.value = this.screenPrice
        totalCount.value = this.screensCount
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = this.fullPrice
        totalCountRollback.value = this.servicePercentPrice
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
    },

    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price
        }

        for (let screen of this.screens) {
            this.screensCount += +screen.count
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent

        this.servicePercentPrice = this.fullPrice + (this.fullPrice * (this.rollback / 100))
    },

}

appData.init()