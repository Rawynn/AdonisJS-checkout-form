import { validateLocaleAndSetLanguage } from 'typescript'
import '../sass/app.scss'

document.addEventListener('DOMContentLoaded', () => {
    let cloneItem = () => {
        let image = document.querySelector('.snowdog-bacon-wrapper section:nth-of-type(2) img')
        let imagesContainer = document.querySelector('.snowdog-bacon-wrapper')
        let clonedItem = image.cloneNode(true)
        imagesContainer.appendChild(clonedItem).classList.add('cloned')
        const lastClonedItem = Array.from(
            document.querySelectorAll('.cloned')
        ).pop()  
        randomValuesItem(lastClonedItem)
    }

    if (window.location.href.indexOf('bacon') > -1) {
        let addBaconButton = document.querySelector('.snowdog-bacon-wrapper button')

        addBaconButton.addEventListener('click', (e) => {
            cloneItem()
        })
    }

    //cloned - random pos: top, left; random width: 200-800; random rotate: -90, 90
    let randomValuesItem = (item) => {
        item.style.WebkitTransitionDuration = getRandomFloat(1, 3, 1) + 's'
        let itemMaxWidth = getRandomInt(200, 800)
        setTimeout(() => {
            item.style.maxWidth = itemMaxWidth + 'px'
            item.style.opacity = '1'
            item.style.top = getRandomInt(-10, 100)+'%'
            item.style.left = getRandomInt(-10, 100) + '%'
        },0)
        setTimeout(() => {
            item.style.webkitTransform = 'rotate('+ getRandomInt(-90, 90) +'deg)'
        },100)
    }

    let getRandomFloat = (min, max, decimals) => {
        const str = (Math.random() * (max - min) + min).toFixed(decimals)
        return parseFloat(str)
    }

    let getRandomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    //input helper show
    let orderButton = document.querySelector('.button--order')

    const showError = (input) => {
        const formField = input.parentElement
        const formHelper = formField.nextElementSibling
        formField.classList.add('input--error')
        formHelper.classList.add('helper--show')
    }

    const showSuccess = (input) => {
        const formField = input.parentElement
        const formHelper = formField.nextElementSibling
        formField.classList.remove('input--error')
        formField.classList.add('input--success')
        formHelper.classList.remove('helper--show')
    }

    const isFieldValid = (input) => {
        const inputPattern = input.pattern
        const re = new RegExp('^' + inputPattern + '$')
        if (!re.test(input.value)) {
            showError(input)
        }
        else {
            showSuccess(input)
            return true
        }

        input.oninput = ((event) => {
            event.stopPropagation()
            isFieldValid(input)
        })
        return re.test(input)
    }

    let validate = () => {
        const firstName = document.querySelector('#firstName');
        const lastName = document.querySelector('#lastName');
        const email = document.querySelector('#email');
        const postalCode = document.querySelector('#postalCode');
        const phone = document.querySelector('#phone');
        const creditCard = document.querySelector('#creditCard');
        const CVV = document.querySelector('#CVV');
        const cardExp = document.querySelector('#expDate');

        isFieldValid(firstName) 
        isFieldValid(lastName) 
        isFieldValid(email) 
        isFieldValid(postalCode) 
        isFieldValid(phone)
        isFieldValid(creditCard) 
        isFieldValid(CVV) 
        isFieldValid(cardExp)

        return isFieldValid(firstName) && isFieldValid(lastName) && isFieldValid(email) && isFieldValid(postalCode) && isFieldValid(phone) && isFieldValid(creditCard) && isFieldValid(CVV) && isFieldValid(cardExp)
    }

    let orderForm = document.querySelector('.order-summary form')

    orderButton.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(validate())
        if(validate()) {
            orderForm.submit()
        }
    })
})
