const tabsBtn = document.querySelectorAll('.menu-p-title')
const tabsItems = document.querySelectorAll('.menu-wrapper')

tabsBtn.forEach(oneTabClick)

function oneTabClick(item) {
    item.addEventListener('click', function() {
        let currentBtn = item
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)

        if (! currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active')
            })
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active')
            })
    
            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }
    })
}

document.querySelector('.menu-p-title').click()


// Кастомный select

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button')
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list')
    const dropDownListItem = dropDownList.querySelectorAll('.dropdown__list-item')
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden')

//клик по кнопке открыть/закрыть

dropDownBtn.addEventListener('click', function(e) {
    dropDownList.classList.toggle('dropdown__list--visible')
    this.classList.add('dropdown__button--active')
    e.preventDefault()
})

//выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун

dropDownListItem.forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        e.stopPropagation()
        dropDownBtn.innerText = this.innerText
        dropDownBtn.focus()
        dropDownInput.value = this.dataset.value
        dropDownList.classList.remove('dropdown__list--visible')
    })
})

// Клик снаркжи дропдаун. Закрытие дропдаун

document.addEventListener('click', function(e) {
    if( e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('.dropdown__button--active')
        dropDownList.classList.remove('dropdown__list--visible')
    }
})

// Клик по клавише Esc

document.addEventListener('keydown', function(e) {
    if(e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('.dropdown__button--active')
        dropDownList.classList.remove('dropdown__list--visible')
    }
})
})