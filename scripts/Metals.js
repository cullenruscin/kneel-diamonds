import { getMetals } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
    }
)

export const Metals = () => {
    let html = "<ul>"

    const listItems = metals.map(metal => {
        return `<li>
            <input type="radio" name="metal" value="${metal.id}"/> ${metal.metal}
        </li>`
    })

    html += listItems.join("")

    html += "</ul>"
    return html
}

