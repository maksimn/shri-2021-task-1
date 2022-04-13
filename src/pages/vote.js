import { header } from '../components/header'
import { user } from '../components/user'

export function vote(data) {
    return `
        ${header(data.title, data.subtitle)}
        ${data.users.map((userData, i) => user(userData, i == 0 ? data.emoji : undefined)).join('')}
    `
}
