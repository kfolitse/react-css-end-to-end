const React = require('react')
const ReactDOM = require('react-dom/server')
const express = require('express')
const { Ball } = require('react-css-end-to-end')

const port = 3000
const app = express()
app.get('*', (req, res) => {
  const html = ReactDOM.renderToString(React.createElement(Ball))
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    ${html}
</body>
</html>`)
})
app.listen(port, () => console.log(`http://localhost:${port}`))
