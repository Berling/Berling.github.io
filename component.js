export default async function defineComponent(selector, templateUrl, styleUrl, type) {
    const [html, css] = await Promise.all([
        fetch(templateUrl).then((resp) => resp.text()),
        fetch(styleUrl).then((resp) => resp.text())
    ]);
    const parser = new DOMParser();
    const template = parser
        .parseFromString(html, 'text/html')
        .querySelector('template');
    const style = document.createElement('style');

    style.textContent = css;
    template.content.prepend(style);

    customElements.define(selector, class extends type {
        constructor() {
            super();

            this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
        }
    });
    return await customElements.whenDefined(selector);
}