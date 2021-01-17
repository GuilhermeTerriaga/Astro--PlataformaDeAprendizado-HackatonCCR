function subirFoto() {
  const form = new FormData();
  form.append('file', '');

  fetch('http://localhost:3333/files', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjEwODkzNjA3LCJleHAiOjE2NDE5OTc2MDd9.QqPxLgEXTx7jEmEurabKGPF6jeprJBy3PS-xTbcfCQ4',
      'content-type':
        'multipart/form-data; boundary=---011000010111000001101001',
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

function atualizarUsuario() {
  fetch('http://localhost:3333/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjEwODU2MjcwLCJleHAiOjE2NDE5NjAyNzB9.knD2UZMyHED-Jv7eusSNP3aqtdP7yyarcMHPIEMh0Ok',
    },
    body:
      '{"name":"Guilherme Persio","email":"gui@teste.com","years_old":"2000-02-01","oldPassword":"123456789","password":"1234567890","passwordConfirmation":"1234567890", "avatar_id": "1"}',
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

function verPerfil() {
  fetch('http://localhost:3333/usersone', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjEwODkzNjA3LCJleHAiOjE2NDE5OTc2MDd9.QqPxLgEXTx7jEmEurabKGPF6jeprJBy3PS-xTbcfCQ4',
    },
    body: '{"email":"guilherme@teste.com"}',
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
