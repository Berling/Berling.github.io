import defineComponent from "../../component.js"

export default await defineComponent(
    "contact-section",
    "./app/contact-section/contact-section.component.html",
    "./app/contact-section/contact-section.component.css",
    class ContactSection extends HTMLElement {
        constructor() {
            super();
        }
    });