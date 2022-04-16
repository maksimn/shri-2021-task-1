import { leaders } from './pages/leaders'

export function renderTemplate(alias, data) {
    if (alias === 'leaders') {
        return leaders(data)
    } else {
        return 'wrong alias param.'
    }
}
