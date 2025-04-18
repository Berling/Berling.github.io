import defineComponent from "../../component.js"

export default await defineComponent(
    "donation-list",
    "./app/donation-list/donation-list.component.html",
    "./app/donation-list/donation-list.component.css",
    class DonationList extends HTMLElement {
        constructor() {
            super();
        }

        async connectedCallback() {
            let response = await fetch("content/donations");
            if (response.status != 200) {
                return;
            }

            let text = await response.text();
            let donations = text.split("\n");
            let donationList = this.shadowRoot.getElementById("donations");
            donations.forEach(donation => {
                let donationEntry = donationList.appendChild(document.createElement("li"));
                donationEntry.classList += "donation-entry";
                donationEntry.textContent = donation;
            });
        }
    });
