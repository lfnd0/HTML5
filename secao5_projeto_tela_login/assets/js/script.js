document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('Botao pressionado');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('Mouse dentro do formulario');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('Mouse fora do formulario');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
    };
    console.log(json);

    let stringJSON = JSON.stringify(json);
    console.log(stringJSON);

    let parseJSON = JSON.parse(stringJSON);
    console.log(parseJSON);

    if (!json.email) {
        console.error('Campo de e-mail vazio');
    } else if (!json.password) {
        console.error('Campo de senha vazio');
    } else {
        console.info('Dados enviados');
    }
});