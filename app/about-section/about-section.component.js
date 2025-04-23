import defineComponent from "../../component.js"

export default await defineComponent(
    "about-section",
    "./app/about-section/about-section.component.html",
    "./app/about-section/about-section.component.css",
    class AboutSection extends HTMLElement {
        constructor() {
            super();
        }
    });