import defineComponent from "../../component.js"

export default await defineComponent(
    "band-list",
    "./app/band-list/band-list.component.html",
    "./app/band-list/band-list.component.css",
    class BandList extends HTMLElement {
        constructor() {
            super();
        }

        async connectedCallback() {
            let response = await fetch("content/bands");
            if (response.status != 200) {
                return;
            }

            let text = await response.text();
            let bands = text.split("\n").sort().join(" | ");
            this.shadowRoot.getElementById("bands").textContent = bands;
        }
    });