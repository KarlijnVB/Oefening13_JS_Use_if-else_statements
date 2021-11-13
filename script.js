const age = 19
console.log(age)

const isFemale = true
console.log(isFemale)

const driverstatus = "wat is deze"
console.log(driverstatus)


// if (age > 17) {
//     console.log("Welkom binnen");
// } else {
//     console.log("Helaas, u bent te jong om binnen te komen");
// }


// if (isFemale) {
//     console.log("Welkom binnen op de ladies night")

// } else {
//     console.log("Helaas, mannen mogen niet naar binnen")
// }
// Ik heb het laten staan om te (laten) zien hoe ik er ben gekomen

// en nu samen gevoegd 
if (age > 17 & isFemale) {
    console.log("Welkom binnen, u bent 18 of ouder en vrouw");
} else {
    console.log("Helaas, u bent te jong om binnen te komen of u bent geen vrouw");
}


if (driverstatus == "bob") {
    console.log("U mag naar huis rijden")
} else {
    console.log("Neemt u maar een taxi")
}