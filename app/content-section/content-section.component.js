import defineComponent from "../../component.js";

export default await defineComponent(
    "content-section",
    "./app/content-section/content-section.component.html",
    "./app/content-section/content-section.component.css",
    class ContentSection extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const content = this.shadowRoot.getElementById("content");
            if (this.hasAttribute("alt")) {
                content.classList.add("alt");
            } else {
                content.classList.remove("alt");
            }
        }
    });
