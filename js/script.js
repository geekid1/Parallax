const clouds = document.querySelectorAll('.cloud'),
    boat = document.querySelector('.boat')
window.addEventListener('scroll', () => {
    let windowY = this.scrollY
    clouds.forEach(cloud => {
        let speed = cloud.getAttribute('speed')
        cloud.style.transform = `translateX(${windowY * speed}px)`
    });
    boat.style.transform = `translateX(${windowY}px)`
})

const title = document.querySelector('.title')
let str = title.innerHTML
title.innerHTML = ''

function typing(i = 0) {
    title.innerHTML += str[i]
    i++
    if (i < str.length) {
        setTimeout(() => {
            typing(i)
        }, 300);
    }

}
setTimeout(() => {
    typing()
}, 1000);

const div = document.querySelector('.div'),
    images = document.querySelectorAll('.img');

div.addEventListener('mousemove', (e) => {

    images.forEach(img => {
        speed = img.getAttribute('data-speed')
        let x = (window.innerWidth - e.pageX * speed) / 20
        let y = (window.innerHeight - e.pageY * speed) / 10
        img.style.transform = `translate(${x}px,${y}px)`
    });
})


const item = document.querySelector('.item'),
    timer = document.querySelectorAll('.timer')

window.addEventListener('scroll', function scroll() {
    if (scrollY > item.offsetTop - item.clientHeight * 2) {
        for (let i = 0; i < timer.length; i++) {
            let count = +timer[i].getAttribute('count')
            function rec(j = 0) {
                timer[i].innerHTML = j
                j++
                if (timer[i].innerHTML < count) {
                    setTimeout(() => {
                        rec(j)
                    }, 30);
                }
            }
            rec()

        }
        window.removeEventListener('scroll', scroll)
    }
})



const btns = document.querySelectorAll('.btn'),
    root = document.querySelector(':root')

for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    window.addEventListener('mousemove', (e) => {
        let x = e.pageX - btn.offsetLeft
        let y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', `${x}px`)
        btn.style.setProperty('--y', `${y}px`)
    })
    btn.addEventListener('click', () => {
        root.style.setProperty('--red', 'green')

    })
}

const boxes = document.querySelectorAll('.catalog_box')

boxes.forEach(box => {
    box.addEventListener('mousemove', rotate)
    box.addEventListener('mouseout', remove)
});

function rotate(e) {
    let halfHeight = this.offsetHeight / 2
    let x = e.offsetX - halfHeight
    let y = e.offsetY - halfHeight
    this.style.transform = `rotateX(${-y / 4}deg) rotateY(${x / 4}deg)`
}
function remove() {
    this.style.transform = `rotate(0)`
}