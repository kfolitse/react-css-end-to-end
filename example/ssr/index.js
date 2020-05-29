const React = require('react')
const ReactDOM = require('react-dom/server')
const express = require('express')
const { Ball, DualBall, Ripple } = require('react-css-end-to-end')

const port = 3000
const app = express()
const html = ReactDOM.renderToString(
  React.createElement(
    React.Fragment,
    null,
    React.createElement(Ball),
    React.createElement(DualBall),
    React.createElement(Ripple)
  )
)
app.get('*', (req, res) => {
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
