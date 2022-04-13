export function header(title, subtitle) {
    return `
        <div class="header">
            <h1 class="header__title">${title}<h1>
            <h2 class="header__subtitle">${subtitle}</h2>
        </div>
    `
}
