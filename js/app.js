let btnLeft = document.querySelector("#btnleft")
let btnRight = document.querySelector("#btnright")
let arr = ['icon-facebook', 'icon-twitter', 'icon-gplus', 'icon-pinterest-circled', 'icon-instagram', 'icon-stumbleupon', 'icon-rss']
let iconParent = document.querySelector(".item-icons div")

removeElements()
createElements()


function createElements() {
    for (let index = 0; index < arr.length - 2; index++) {
        let i = document.createElement('i')
        i.classList.add(arr[index])
        iconParent.appendChild(i)
    }
}

function removeElements() {
    iconParent.innerHTML = ''
}

function bubbleLeft() {
    let firstItem = arr[0]
    for (let index = 0; index < arr.length - 1; index++) {
        arr[index] = arr[index + 1]
    }
    arr[arr.length - 1] = firstItem
    console.log(arr)
}

function bubbleRight() {
    let lastItem = arr[arr.length - 1]
    for (let index = arr.length - 1; index > 0; index--) {
        arr[index] = arr[index - 1]
    }
    arr[0] = lastItem
    console.log(arr)
}

btnLeft.addEventListener("click", function () {
    bubbleLeft()
    removeElements()
    createElements()
})

btnRight.addEventListener("click", function () {
    bubbleRight()
    removeElements()
    createElements()
})

let btn_tabs = document.querySelectorAll(".tab-title li")
let tabs = document.querySelectorAll(".tab-content")

for (const item_tab of btn_tabs) {

    item_tab.addEventListener("click", function () {

        for (const item of btn_tabs){
            item.classList.remove("active")
        }

        for (const item_content of tabs) {
            item_content.classList.remove("active")
        }

        for (const item_content of tabs) {
            if (item_tab.dataset.id == item_content.dataset.id) {
                item_tab.classList.add("active")
                item_content.classList.add("active")
            }
        }
    })
}

let basic = document.querySelectorAll(".items-pricing ul")
let basic_li = document.querySelectorAll(".items-pricing ul li")

for (const item_tab of basic) {

    item_tab.addEventListener("click", function () {

        for (const item of basic){
            item.classList.remove("active")
        }

        for (const item_content of basic_li) {
            item_content.classList.remove("active")
        }

        for (const item_content of basic_li) {
            if (item_tab.dataset.id == item_content.dataset.id) {
                item_tab.classList.add("active")
                item_content.classList.add("active")
            }
        }
    })
}