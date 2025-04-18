import defineComponent from "../../component.js";

export default await defineComponent(
    "home-section",
    "./app/home-section/home-section.component.html",
    "./app/home-section/home-section.component.css",
    class HomeSection extends HTMLElement {
        constructor() {
            super();
        }
    });