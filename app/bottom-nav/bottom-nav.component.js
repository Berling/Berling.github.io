import defineComponent from "../../component.js"

export default await defineComponent(
    "bottom-nav",
    "./app/bottom-nav/bottom-nav.component.html",
    "./app/bottom-nav/bottom-nav.component.css",
    class BottomNav extends HTMLElement {
        constructor() {
            super();
        }
    });