export function user(data, emoji) {
    return `
        <div class="user">
            ${emoji ? `<div class="user__emoji">${emoji}</div>` : ''}
            <div class="user__avatar">
                <img alt="" src="assets/images/1x/${data.avatar}">
            </div>
            <div class="user__name">
                ${data.name}
            </div>
            <div class="user__value">
                ${data.valueText}
            <div>
        </div>
    `
}
