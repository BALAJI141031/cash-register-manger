let billEL = document.querySelector(".cash");

let proceedBtn = document.querySelector("#proceed");

let billError = document.querySelector("#errorforbill");

// console.log(billEL, proceedBtn);

let containerEl = document.querySelector(".container");
let checkBtn = null;
let amountgivenEl = null;

proceedBtn.addEventListener("click", function () {
  if (billEL.value <= 0) {
    billError.innerText = "give proper bill amount";
  } else {
    billError.innerText = "";

    let labelEl = document.createElement("label");
    labelEl.innerText = "Amount given";
    containerEl.appendChild(labelEl);
    labelEl.htmlFor = "amount";

    amountgivenEl = document.createElement("input");
    amountgivenEl.type = "number";
    containerEl.appendChild(amountgivenEl);

    containerEl.removeChild(proceedBtn);
    checkBtn = document.createElement("button");
    checkBtn.innerText = "Check";
    containerEl.appendChild(checkBtn);
  }
});

checkBtn.addEventListener("click", function () {
  let amountErrorEl = document.createElement("h3");
  containerEl.appendChild(amountErrorEl);
  console.log(amountgivenEl);
  if (amountgivenEl.value <= 0) {
    amountgivenEl.innerText = "go and wash plates";
  } else {
    amountgivenEl.innerText = "";
  }
});
