import defineComponent from "../../component.js"

export default await defineComponent(
    "imprint-section",
    "./app/imprint-section/imprint-section.component.html",
    "./app/imprint-section/imprint-section.component.css",
    class ImprintSection extends HTMLElement {
        constructor() {
            super();
        }
    });