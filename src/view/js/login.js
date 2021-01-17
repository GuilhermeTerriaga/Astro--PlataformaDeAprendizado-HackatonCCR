function criarUsuario() {
  fetch('http://localhost:3333/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:
      '{"name":"Guilherme Persio Terriaga","years_old":"2000-03-31","email":"guilherme@teste.com","password":"12345678"}',
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

function logar() {
  fetch('http://localhost:3333/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: '{"email":"gui@teste.com","password":"1234567890"}',
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
