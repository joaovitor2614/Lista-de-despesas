// Variaveis
let expenseList = document.querySelector(".expenseList");
let addBtn = document.getElementById("addBtn");
let input = document.getElementById("inputField");
let parser = new DOMParser();

// Variaveis auxiliares
let expense;
let id = 0;

// Adicionar despesa a lista
function addExpense(expense, index) {
  if (!input.value) {
    return
  } else {
    let expense = input.value;
    var position = "afterbegin"
    const entry = `<ul id="list">
                         <p>R$ ${expense}<img src="trash.jpg"  id="trash"></p>
                    </ul>`;

    expenseList.insertAdjacentHTML(position, entry);
    input.value = "";

    // Atualiza local storage
    updateExpensesLocalStorage();
  }
}

function identify(event) {
  var targetBtn = event.target;
  if (targetBtn.id == "trash") {
    targetBtn.parentNode.parentNode.parentNode.removeChild(targetBtn.parentNode.parentNode);
    // Atualiza local storage
    updateExpensesLocalStorage();
  }
}

function updateExpensesLocalStorage() {
  localStorage.setItem("expenses", expenseList.innerHTML)
}

// Carrega dados da list do local storage
function loadExpensesFromLocalStorage() {
  if (localStorage.getItem("expenses"))
    expenseList.insertAdjacentHTML('afterbegin', localStorage.getItem("expenses"));
}

window.addEventListener("load", function (event) {
  loadExpensesFromLocalStorage();
});

addBtn.addEventListener('click', addExpense);
expenseList.addEventListener('click', identify);
