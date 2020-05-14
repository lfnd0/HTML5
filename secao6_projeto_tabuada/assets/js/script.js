/* Aula 228 - Utilizando comentários */

function calc() {
    let mtable = document.querySelector('#mtable tbody');
    let num1 = parseInt(document.querySelector('#num').value);

    mtable.innerHTML = '';

    for (let num2 = 0; num2 <= 10; num2++) {
        let tr = document.createElement('tr');
        let result = num1 * num2;

        let template = `
            <td>${num1}</td>
            <td>x</td>
            <td>${num2}</td>
            <td>=</td>
            <td>${result}</td>
        `;

        tr.innerHTML = template;

        mtable.append(tr);
    }
}

calc();

document.querySelector('#num').addEventListener('change', calc);