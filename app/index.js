const express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  console.log(JSON.stringify({
    v: 1,
    name: "songbird",
    msg: "Hello World",
    beat: {
      name: "songbird01",
      hostname: "songbird01",
      version: "6.4.2"
    },
    level: 30,
    route: "http://someurl.com/path/foo.html?query=string",
    _label: "INFO",
    hostname: "songbird01",
    prospector: {
      type: "log"
    },
    host: {
      name: "songbird01"
    },
    file: "/var/lib/some/file/index.js",
    type: "html",
    input: {
      type: "log"
    }
  }));
  res.send('Hello World!');
})
app.get('/_status', (req, res) => res.status(204).send())

app.listen(port, () => console.log(`Songbird is listening on port ${port}!`))
