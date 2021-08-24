const billAndCash = document.querySelectorAll(".cash")


const btnEl = document.querySelector("#btn")

const rowEls = document.querySelectorAll(".notes")

console.log(rowEls)

const warningEl = document.querySelector("#errormsg")

var denominationList = [2000, 500, 100, 20, 10, 5, 1]

function checkForReturnChange() {
    var bill = Number(billAndCash[0].value)
    var cashGiven = Number(billAndCash[1].value)
    //console.log(bill)

    if (cashGiven < bill) {
        warningEl.innerText = "Go and Wash THe Plates For sometime"

    }

    else {
        let returnChange = cashGiven - bill

        for (var i = 0; i < denominationList.length; i++) {
            var respectiveNotes = Math.trunc(returnChange / denominationList[i])
            returnChange = (returnChange % denominationList[i])
            rowEls[i].innerText = respectiveNotes
        }

        /*let howManyTwoKs = Math.trunc(returnChange / 2000)
        rowEl.innerText = howManyTwoKs
        returnChange = returnChange % 2000
        //console.log(howManyTwoKs)


        let howManyFiveHun = Math.trunc(returnChange / 500)

        //console.log(howManyFiveHun)
        returnChange = (returnChange % 500)


        let howManyHundreads = Math.trunc(returnChange / 100)

        returnChange = (returnChange % 100)

        let howManyTwenty = Math.trunc(returnChange / 20)
        returnChange = (returnChange % 20)


        let howManyTens = Math.trunc(returnChange / 10)
        returnChange = (returnChange % 10)


        let howManyFives = Math.trunc(returnChange / 5)
        returnChange = (returnChange % 5)


        let howManyones = Math.trunc(returnChange / 1)
        returnChange = (returnChange % 1)
        */







    }
}


btnEl.addEventListener("click", checkForReturnChange)