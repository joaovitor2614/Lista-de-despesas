// Variaveis
let expenseList = document.querySelector(".expenseList")
let addBtn = document.getElementById("addBtn");
let input = document.getElementById("inputField");

// Variaveis auxiliares




let expense;
// LocalStorage
let id = 0;


addBtn.addEventListener('click', addExpense);


// Adicionar despesa a lista
function addExpense(expense, index) {
    if (!input.value) {
        return
    } else {
        let expense = input.value;
        var position = "afterbegin"


        const entry = `
                 <ul id="list">
                     <p>${expense}R$<img src="trash.jpg"  id="trash"></p>
                     
                </ul>


                  `;
        expenseList.insertAdjacentHTML(position, entry);


        localStorage.setItem("entry_list", JSON.stringify(entry));

        input.value = "";
    }







}
expenseList.addEventListener('click', identify)

function identify(event) {
    var targetBtn = event.target;
    if (targetBtn.id == "trash") {
        targetBtn.parentNode.parentNode.parentNode.removeChild(targetBtn.parentNode.parentNode);
    }



}
