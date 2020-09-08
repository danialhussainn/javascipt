function bloonmotion() {
    let boxwidth = (box.getBoundingClientRect().width)
    let boxHeight = (box.getBoundingClientRect().height)
    let allbloon = document.querySelectorAll(".bloonclass")
    allbloon.forEach((element) => {
        element.directionY = 1
        element.directionX = 1
        element.style.left = (Math.round(Math.random(boxwidth) * 600)) + 'px'
        element.style.top = (Math.round(Math.random(boxHeight) * 600)) + 'px'

    })
    let startKey = setInterval(() => {
        let addbloon = document.querySelectorAll(".bloonclass")
        addbloon.forEach((element) => {
            if (element.directionY == 1) {
                let upper = parseInt(element.style.top) + 1
                element.style.top = upper + 'px'

            }
            else {

                let upper = parseInt(element.style.top) - 1
                element.style.top = upper + 'px'
            }
            if (element.directionX == 1) {
                let leftside = parseInt(element.style.left) + 1
                element.style.left = leftside + 'px'

            }
            else {
                let leftside = parseInt(element.style.left) - 1
                element.style.left = leftside + 'px'
            }

            let boxx = box.getBoundingClientRect()
            let bloon = element.getBoundingClientRect();
            if (bloon.top + bloon.height >= boxx.bottom) {
                element.directionY = 0

            }
            if (bloon.top <= boxx.top) {
                element.directionY = 1



            }
            if (bloon.left <= boxx.left) {
                element.directionX = 1

            }
            if (bloon.right >= boxx.width) {
                element.directionX = 0

            }




        })




    }, 10)


}


function addbloon(event) {
    let blooncreat = document.createElement('img')
    blooncreat.setAttribute('src', 'image/bal' + Math.round(Math.random() * 2) + ".png")
    blooncreat.setAttribute("class", "bloonclass")
    blooncreat.style.left = (Math.round(Math.random(700) * 600)) + 'px'
    blooncreat.style.top = (Math.round(Math.random(700) * 600)) + 'px'
    blooncreat.directionY = 1;
    blooncreat.directionX = 1;

    let getid = document.getElementById("box")

    getid.appendChild(blooncreat)

}
