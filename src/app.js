const express = require('express')

const PORT = 8080
const app = express()
const rootFolder = __dirname + '/../'

app.use(express.static(rootFolder))

app.get('', (req, res) => {
    res.send(`
        <html>

        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>CodeHub</title>
            <link rel="stylesheet" href="build/stories.css">
        </head>
        
        <body>
            <script type="text/javascript" src="build/stories.js"></script>
        </body>
        
        </html>
    `)
})

app.listen(PORT, () => {
    console.log(`Express app listening on localhost:${PORT}`)
})
