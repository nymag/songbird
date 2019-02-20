const express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/_status', (req, res) => res.status(204).send())

app.listen(port, () => console.log(`Songbird is listening on port ${port}!`))
