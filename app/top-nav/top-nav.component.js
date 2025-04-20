import defineComponent from "../../component.js"

export default await defineComponent(
    "top-nav",
    "./app/top-nav/top-nav.component.html",
    "./app/top-nav/top-nav.component.css",
    class TopNav extends HTMLElement {
        open = false;

        constructor() {
            super();
        }

        connectedCallback() {
            const burger = this.shadowRoot.getElementById("burger");
            const menu = this.shadowRoot.getElementById("menu");

            burger.onclick = () => {
                if (this.open) {
                    menu.classList.remove("open");
                } else {
                    menu.classList.add("open");
                }
                this.open = !this.open;
            }
        }
    });