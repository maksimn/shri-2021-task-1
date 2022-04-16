import { user } from './user'

export function pedestal(data) {
    const length = data.users.length < 6 ? data.users.length : 5
    const order = pedestalOrder(length)
    
    return `
        <div class="pedestal">
            ${order.map(i => pedestalPlace(data, i)).join('')}
        </div>
    
    `
}

function pedestalPlace(data, i) {
    return `
        <div class="pedestal-place-${i}">
            <div class="pedestal-user-${i}">
                ${user(data.users[i - 1], i == 1 ? data.emoji : undefined)}
            </div>
            <div class="pedestal-stand-${i}">
                <div class="pedestal-stand-${i}__value">${i}</div>              
            </div>
        </div>
    `
}

function pedestalOrder(length) {
    if (length == 0) {
        return []
    } else if (length == 1) {
        return [1]
    } else if (length == 2) {
        return [1, 2]
    } else if (length % 2 == 1) {
        return [length].concat(pedestalOrder(length - 1))
    } else {
        return pedestalOrder(length - 1).concat([length])
    }
}
