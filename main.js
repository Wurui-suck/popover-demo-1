let $button = document.querySelector(".wrapper>button")
let $wrapper = document.querySelector(".wrapper")
let ClickShift = true
$button.addEventListener('click', function () {
    if (ClickShift === true) {
        buttonSwitch.textContent = "点击关闭浮层"
        popover.style.display = "block"
        ClickShift = false
    } else {
        buttonSwitch.textContent = "点击打开浮层"
        popover.style.display = "none"
        ClickShift = true
    }

    let ClickDocument = function () {
        buttonSwitch.textContent = "点击打开浮层"
        popover.style.display = "none"
        ClickShift = true
        document.removeEventListener('click', ClickDocument)
    }
    document.addEventListener('click', ClickDocument)

})

$wrapper.addEventListener('click', (e) => {
    e.stopPropagation()
})