import defineComponent from "../../component.js"

export default await defineComponent(
    "top-nav",
    "./app/top-nav/top-nav.component.html",
    "./app/top-nav/top-nav.component.css",
    class TopNav extends HTMLElement {
        constructor() {
            super();
        }
    });