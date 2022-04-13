import { vote } from './pages/vote'

export function renderTemplate(alias, data) {
    if (alias === 'leaders') {
        return vote(data)
    } else {
        return 'wrong alias param.'
    }
}
