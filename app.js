const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;

// Middleware для добавления заголовка Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Маршрут для корня
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Маршрут /login/
app.get('/login/', (req, res) => {
  res.send('adilja2001batyrbekova');
});

// Маршрут /promise/
app.get('/promise/', (req, res) => {
  const functionCode = function task(x) {
    return new Promise((resolve, reject) => {
      if (x < 18) {
        resolve('yes');
      } else {
        reject('no');
      }
    });
  };

  res.type('text/plain');
  res.send(functionCode);
});

// Маршрут /fetch/
app.get('/fetch/', (req, res) => {
  const htmlContent =
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Fetch Example</title>
    </head>
    <body>
      <input type="text" id="inp" value="Enter URL here">
      <button id="bt">Fetch</button>

      <script>
        document.getElementById('bt').addEventListener('click', () => {
          const url = document.getElementById('inp').value;

          fetch(url)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.text();
            })
            .then(data => {
              document.getElementById('inp').value = data;
            })
            .catch(error => {
              console.error('Error:', error);
            });
        });
      </script>
    </body>
    </html>
  ;

  res.type('text/html');
  res.send(htmlContent);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});
