console.log("Fitmaker")

const shirtPijlLinks = document.querySelector('#pijlShirtLinks');
const shirtAfbeelding = document.querySelector('#shirtAfbeelding');
const shirtPijlRechts = document.querySelector('#pijlShirtRechts')

let shirts = ["images/shirt_streetwear.jpg", "images/shirt_coquett.jpg", "images/shirt_bcasual.jpg"]
let eersteShirt = 0
let lengteshirts = shirts.length

function veranderShirtLinks() {
    //https://chatgpt.com/share/102a939e-0759-478d-8b87-ace2416df6cd
    //prompt: (kopie van code die het niet deed) waarom werkt de code niet 
    if (eersteShirt - 1 < 0) {
        shirtPijlLinks.disabled = true
    } else {
        eersteShirt = (eersteShirt - 1)
        shirtAfbeelding.src = shirts[eersteShirt]
    }

}

function veranderShirtRechts() {
    //https://chatgpt.com/share/1284ddf4-04b6-4ca7-8be8-88eb4e7546c6
    //prompt: (kopie van code die het niet deed) waarom werkt de code niet 
    if (eersteShirt + 1 == lengteshirts) {
        shirtPijlRechts.disabled = true
    } else {
        eersteShirt = (eersteShirt + 1)
        shirtAfbeelding.src = shirts[eersteShirt]
    }
}

shirtPijlLinks.addEventListener('click', veranderShirtLinks)
shirtPijlRechts.addEventListener('click', veranderShirtRechts)

const broekPijlLinks = document.querySelector('#pijlBroekLinks');
const broekAfbeelding = document.querySelector('#broekAfbeelding');
const broekPijlRechts = document.querySelector('#pijlBroekRechts')

let broeken = ["images/broek_streetwear.jpg", "images/broek_coquett.jpg", "images/broek_bcasual.jpg"]
let eersteBroek = 0;
let lengteBroeken = broeken.length

function veranderBroekLinks() {
    if (eersteBroek - 1 < 0) {
        broekPijlLinks.disabled = true
    } else {
        eersteBroek = (eersteBroek - 1)
        broekAfbeelding.src = broeken[eersteBroek]
    }
}

function veranderBroekRechts() {
    if (eersteBroek + 1 == lengteBroeken) {
        broekPijlRechts.disabled = true
    } else {
        eersteBroek = (eersteBroek + 1)
        broekAfbeelding.src = broeken[eersteBroek]
    }
}

broekPijlLinks.addEventListener('click', veranderBroekLinks)
broekPijlRechts.addEventListener('click', veranderBroekRechts)

const schoenenPijlLinks = document.querySelector('#pijlSchoenenLinks');
const schoenenAfbeelding = document.querySelector('#schoenenAfbeelding');
const schoenenPijlRechts = document.querySelector('#pijlSchoenenRechts')

let schoenen = ["images/schoenen_streetwear.jpg", "images/schoenen_coquett.jpg", "images/schoenen_bcasual.jpg"]
let eersteSchoenen = 0;
let lengteSchoenen = schoenen.length

function veranderSchoenenLinks() {
    if (eersteSchoenen - 1 < 0) {
        schoenenPijlLinks.disabled = true
    } else {
        eersteSchoenen = (eersteSchoenen - 1)
        schoenenAfbeelding.src = schoenen[eersteSchoenen]
    }
}

function veranderSchoenenRechts() {
    if (eersteSchoenen + 1 == lengteSchoenen) {
        schoenenPijlRechts.disabled = true
    } else {
        eersteSchoenen = (eersteSchoenen + 1)
        schoenenAfbeelding.src = schoenen[eersteSchoenen]
    }
}

schoenenPijlLinks.addEventListener('click', veranderSchoenenLinks)
schoenenPijlRechts.addEventListener('click', veranderSchoenenRechts)

const checkKnop = document.querySelector("#check")
const styleLog = document.querySelector("#randomStijl")
const antwoordZin = document.querySelector("#antwoord")

let styles = ["Streetwear", "Coquet", "Business Casual"]
let eersteStyle = " "
//https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/ //
function selectStyle() {
    eersteStyle = styles[Math.floor(Math.random() * styles.length)];
    styleLog.textContent = eersteStyle;
}
selectStyle()

function deFitStreatwear() {
    if (eersteShirt == 0 && eersteBroek == 0 && eersteSchoenen == 0) {
        antwoordZin.textContent = "Goed geraden!"
    } else {
        antwoordZin.textContent = "Een of meerdere items kloppen niet"
    }
}

function deFitCoquet() {
    if (eersteShirt == 1 && eersteBroek == 1 && eersteSchoenen == 1) {
        antwoordZin.textContent = "Goed geraden!"
    } else {
        antwoordZin.textContent = "Een of meerdere items kloppen niet"
    }
}

function deFitBusinessCasual() {
    if (eersteShirt == 2 && eersteBroek == 2 && eersteSchoenen == 2) {
        antwoordZin.textContent = "Goed geraden!"
    } else {
        antwoordZin.textContent = "Een of meerdere items kloppen niet"
    }
}

//https://chatgpt.com/share/1b3e998b-872c-47e1-98bf-06f633ad1daa
//prompt: (kopie van stuk code) is het mogelijk om bijvoorbeeld de functie deFitBusinessCasual 
//        alleen te activeren als "Business Casual" uit de array word geselecteerd?
function checkStyle() {
    switch (eersteStyle) {
        case "Streetwear":
            deFitStreatwear();
            break;
        case "Coquet":
            deFitCoquet();
            break;
        case "Business Casual":
            deFitBusinessCasual();
            break;
        default:
            console.log("Onbekende stijl");
    }
}

checkKnop.addEventListener('click', checkStyle)