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
            if (this.open) {
                this.closeMenu()
            } else {
                this.openMenu();
            }
        }

        openMenu() {
            const menuContainer = this.shadowRoot.getElementById("menu-container");
            const menu = this.shadowRoot.getElementById("menu");
            const modal = this.shadowRoot.getElementById("modal");
            menuContainer.classList.add("open");
            menu.classList.add("open");
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
            this.open = true;
        }

        closeMenu() {
            const menuContainer = this.shadowRoot.getElementById("menu-container");
            const menu = this.shadowRoot.getElementById("menu");
            const modal = this.shadowRoot.getElementById("modal");
            menuContainer.classList.remove("open");
            menu.classList.remove("open");
            modal.classList.remove("active");
            document.body.style.overflow = "unset";
            this.open = false;
        }
    });