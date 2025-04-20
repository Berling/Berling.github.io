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

            const modal = this.shadowRoot.getElementById("modal");
            modal.onclick = () => this.closeMenu();
        }

        toggleMenu() {
            const menu = this.shadowRoot.getElementById("menu");
            const modal = this.shadowRoot.getElementById("modal");
            if (this.open) {
                menu.classList.remove("open");
                modal.classList.remove("active");
                document.body.style.overflow = "unset";
            } else {
                menu.classList.add("open");
                modal.classList.add("active");
                document.body.style.overflow = "hidden";
            }
            this.open = !this.open;
        }

        closeMenu() {
            const menu = this.shadowRoot.getElementById("menu");
            const modal = this.shadowRoot.getElementById("modal");
            menu.classList.remove("open");
            modal.classList.remove("active");
            document.body.style.overflow = "unset";
            this.open = false;
        }
    });