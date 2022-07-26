window.addEventListener('click',function (e) {
    this.navigator.clipboard.writeText(e.target.className)
})
