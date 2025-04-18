import defineComponent from "../component.js";
import HomeSection from "./home-section/home-section.component.js"
import ContentSection from "./content-section/content-section.component.js"
import EventList from "./event-list/event-list.component.js"

export default await defineComponent(
    "app-root",
    "./app/app.component.html",
    "./app/app.component.css",
    class App extends HTMLElement {
        constructor() {
            super();
        }
    });
