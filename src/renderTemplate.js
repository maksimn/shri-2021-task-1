const { componentA } = require('./components/componentA')
const { componentB } = require('./components/componentB')

function renderTemplate(alias, data) {
    return `
        ${componentA()}
        ${componentB()}
    `
}

exports.renderTemplate = renderTemplate
