import defineComponent from "../../component.js";

export default await defineComponent(
    "content-section",
    "./app/content-section/content-section.component.html",
    "./app/content-section/content-section.component.css",
    class ContentSection extends HTMLElement {
        static _alternateColorScheme = false;

        constructor() {
            super();
        }

        connectedCallback() {
            const content = this.shadowRoot.getElementById("content");
            if (ContentSection._alternateColorScheme) {
                content.classList.add("alt");
            } else {
                content.classList.remove("alt");
            }
            ContentSection._alternateColorScheme = !ContentSection._alternateColorScheme;
        }
    });
