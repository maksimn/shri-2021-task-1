const express = require('express')

const PORT = 8080
const app = express()
const buildFolder = __dirname + '/../build/'

app.use(express.static(buildFolder))

app.get('', (req, res) => {
    res.send(`
        <html>

        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>CodeHub</title>
            <link rel="stylesheet" href="stories.css">
        </head>
        
        <body>
            <script type="text/javascript" src="stories.js"></script>
        </body>
        
        </html>
    `)
})

app.listen(PORT, () => {
    console.log(`Express app listening on localhost:${PORT}`)
})
