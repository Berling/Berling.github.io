import defineComponent from "../../component.js"

export default await defineComponent(
    "gdpr-section",
    "./app/gdpr-section/gdpr-section.component.html",
    "./app/gdpr-section/gdpr-section.component.css",
    class GdprSection extends HTMLElement {
        constructor() {
            super();
        }
    });