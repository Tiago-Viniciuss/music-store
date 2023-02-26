function openMenu () {
    let menu = document.querySelector("#menu")
    let menuicon = document.querySelector('#navmenubutton')
    

    menu.classList.toggle('active')
}

const observer = new IntersectionObserver(entries => {
    console.log(entries)
    entries[0].target.classList.add('init-hidden-off')
},)

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})


  