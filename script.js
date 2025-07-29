const show = document.querySelectorAll(".show1")
const contenedor = document.querySelector(".contenedor")

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const inicio = async () => {
    await delay(100)
    show.forEach((show) => {
        show.style.opacity = "1"
    })
    titulo.style.opacity = "1"
    contenedor.style.transition = "transform 1.5s ease-out"
    contenedor.style.transform = "translateX(15vw)"
    await delay(1500)
    contenedor.style.transition = "transform 1s ease-in-out"
    contenedor.style.transform = "translateX(0vw)"
}

const mover = async () => {
    await delay(100)
    show.forEach((show) => {
        show.style.opacity = "1"
    })
    const show1 = document.getElementById("show1")
    const show2 = document.getElementById("show2")
    const show3 = document.getElementById("show3")
    const shows = [show1, show2, show3]
    const titulo = document.querySelector(".titulo")
    titulo.style.opacity = "1"

    shows.forEach((show) => {
        show.style.transform = "translate(0)"
    })
}
mover()

inicio()