import defineComponent from "../component.js";

export default await defineComponent(
    "app-root",
    "./app/app.component.html",
    "./app/app.component.css",
    class App extends HTMLElement {
        constructor() {
            super();
        }
    });
