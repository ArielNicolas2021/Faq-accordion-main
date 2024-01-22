let iconPlusOne = document.getElementById('iconPlusOne')
let iconMinusOne = document.getElementById('iconMinusOne')
let accordionTextOne = document.getElementById('accordionTextOne')
let accordionFrontOne = document.getElementById('accordionFrontOne')

accordionFrontOne.addEventListener('click', () => {
    if (iconMinusOne.style.display == 'none') {
        accordionTextOne.style.height = '8rem'
        accordionTextOne.style.margin = '2rem 0'
        iconPlusOne.style.display = 'none'
        iconMinusOne.style.display = 'block'    
    } else {
        accordionTextOne.style.height = '0'
        accordionTextOne.style.margin = '0'
        iconPlusOne.style.display = 'block'
        iconMinusOne.style.display = 'none'    
    }
})

let iconPlusTwo = document.getElementById('iconPlusTwo')
let iconMinusTwo = document.getElementById('iconMinusTwo')
let accordionTextTwo = document.getElementById('accordionTextTwo')
let accordionFrontTwo = document.getElementById('accordionFrontTwo')

accordionFrontTwo.addEventListener('click', () => {
    if (iconMinusTwo.style.display == 'none') {
        accordionTextTwo.style.height = '8rem'
        accordionTextTwo.style.margin = '2rem 0'
        iconPlusTwo.style.display = 'none'
        iconMinusTwo.style.display = 'block'    
    } else {
        accordionTextTwo.style.height = '0'
        accordionTextTwo.style.margin = '0'
        iconPlusTwo.style.display = 'block'
        iconMinusTwo.style.display = 'none'    
    }
})

let iconPlusThree = document.getElementById('iconPlusThree')
let iconMinusThree = document.getElementById('iconMinusThree')
let accordionTextThree = document.getElementById('accordionTextThree')
let accordionFrontThree = document.getElementById('accordionFrontThree')

accordionFrontThree.addEventListener('click', () => {
    if (iconMinusThree.style.display == 'none') {
        accordionTextThree.style.height = '8rem'
        accordionTextThree.style.margin = '2rem 0'
        iconPlusThree.style.display = 'none'
        iconMinusThree.style.display = 'block'    
    } else {
        accordionTextThree.style.height = '0'
        accordionTextThree.style.margin = '0'
        iconPlusThree.style.display = 'block'
        iconMinusThree.style.display = 'none'    
    }
})

let iconPlusFour = document.getElementById('iconPlusFour')
let iconMinusFour = document.getElementById('iconMinusFour')
let accordionTextFour = document.getElementById('accordionTextFour')
let accordionFrontFour = document.getElementById('accordionFrontFour')

accordionFrontFour.addEventListener('click', () => {
    if (iconMinusFour.style.display == 'none') {
        accordionTextFour.style.height = '8rem'
        accordionTextFour.style.margin = '2rem 0'
        iconPlusFour.style.display = 'none'
        iconMinusFour.style.display = 'block'    
    } else {
        accordionTextFour.style.height = '0'
        accordionTextFour.style.margin = '0'
        iconPlusFour.style.display = 'block'
        iconMinusFour.style.display = 'none'    
    }
})