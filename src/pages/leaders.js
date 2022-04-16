import { header } from '../components/header'
import { pedestal } from '../components/pedestal'

export function leaders(data) {
    return `
        ${header(data.title, data.subtitle)}
        ${pedestal(data)}
    `
}
