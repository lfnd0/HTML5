let data = []; // new Array;

function renderToDo() {
    document.querySelector('.to-do').innerHTML = '';

    data.forEach(task => {
        let li = document.createElement('li');

        li.innerHTML = `
            <input type="checkbox" id="task-${task.id}">
            <label for="task-${task.id}">${task.title}</label>
            <button type="button">x</button>
        `;

        li.querySelector('input').addEventListener('change', e => {
            if (e.target.checked) {
                li.classList.add('complete');
            } else {
                li.classList.remove('complete')
            }
        });

        li.querySelector('button').addEventListener('click', e => {
            let button = e.target;
            let li = button.parentNode;
            let input = li.querySelector('input');
            let idTask = input.id;
            let idArray = idTask.split('-');
            let id = idArray[1];

            let title = li.querySelector('label').innerText;

            if (confirm(`Deseja excluir a tarefa ${title}?`)) {
                data = data.filter(task => task.id !== parseInt(id));
                
                renderToDo();
            }
        });

        document.querySelector('.to-do').append(li);
    });
}

document.querySelector('#new-task').addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        data.push({
            id: data.length + 1,
            title: e.target.value
        });

        e.target.value = '';

        renderToDo();
    }
});

renderToDo();