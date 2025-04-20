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
            burger.onclick = () => this.toggleMenu();

            this.shadowRoot.querySelectorAll("#links>a").forEach(link => {
                link.onclick = () => this.closeMenu();
            });
        }

        toggleMenu() {
            const menu = this.shadowRoot.getElementById("menu");
            if (this.open) {
                menu.classList.remove("open");
            } else {
                menu.classList.add("open");
            }
            this.open = !this.open;
        }

        closeMenu() {
            const menu = this.shadowRoot.getElementById("menu");
            menu.classList.remove("open");
            this.open = false;
        }
    });