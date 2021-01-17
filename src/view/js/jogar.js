let pergunta;
function verPergunta() {
  fetch('http://localhost:3333/questions', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjEwODkzNjA3LCJleHAiOjE2NDE5OTc2MDd9.QqPxLgEXTx7jEmEurabKGPF6jeprJBy3PS-xTbcfCQ4',
    },
    body: 'false',
  })
    .then((response) => {
      pergunta = response.tittle;
    })
    .catch((err) => {
      console.error(err);
    });
}
function pontuar() {
  fetch('http://localhost:3333/point', {
    method: 'POST',
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

let resposta;
function responder() {
  fetch('http://localhost:3333/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjEwODkzNjA3LCJleHAiOjE2NDE5OTc2MDd9.QqPxLgEXTx7jEmEurabKGPF6jeprJBy3PS-xTbcfCQ4',
    },
    body: `{"tittle":${this.pergunta},"option":1}`,
  })
    .then((response) => {
      resposta = response.resposta;
      if (resposta === 'certa') {
        pontuar();
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
