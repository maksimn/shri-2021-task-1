import { header } from '../components/header'
import { pedestal } from '../components/pedestal'

export function vote(data) {
    return `
        ${header(data.title, data.subtitle)}
        ${pedestal(data)}
    `
}
