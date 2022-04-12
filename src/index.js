const { renderTemplate } = require('./renderTemplate')

const body = document.querySelector('body')

body.innerHTML = renderTemplate()
