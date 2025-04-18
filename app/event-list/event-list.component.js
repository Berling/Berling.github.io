import defineComponent from "../../component.js"

export default await defineComponent(
    "event-list",
    "./app/event-list/event-list.component.html",
    "./app/event-list/event-list.component.css",
    class EventList extends HTMLElement {
        constructor() {
            super();
        }

        async connectedCallback() {
            let response = await fetch("content/events");
            if (response.status != 200) {
                return;
            }
            let text = await response.text();
            let lines = text.split("\n");
            let events = [];
            for (let i = 0; i < lines.length; i++) {
                let fields = lines[i].split(";");
                let event = {
                    "date": new Date(fields[0]),
                    "bands": fields[1],
                    "eventId": fields[2]
                };
                events.push(event);
            }

            events.sort((a, b) => b.date - a.date);
            let today = new Date();
            let upcomingEvents = events.filter((event) => event.date >= today).reverse();
            let upcomingList = this.shadowRoot.getElementById("upcoming");
            upcomingEvents.forEach(event => {
                let upcomingEntry = upcomingList.appendChild(document.createElement("li"));
                let content = upcomingEntry.appendChild(document.createElement("a"));
                content.href = "https://www.facebook.com/events/" + event.eventId;
                content.textContent = event.date.toLocaleDateString() + " - " + event.bands;
            });
            if (upcomingEvents.length == 0) {
                upcomingList.appendChild(document.createElement("li")).textContent = "- Nix los -";
            }

            let pastEvents = events.filter((event) => event.date < today).slice(0, 5);
            let pastList = this.shadowRoot.getElementById("past");
            pastEvents.forEach(event => {
                let pastEntry = pastList.appendChild(document.createElement("li"));
                let content = pastEntry.appendChild(document.createElement("a"));
                content.href = "https://www.facebook.com/events/" + event.eventId;
                content.textContent = event.date.toLocaleDateString() + " - " + event.bands;
            });
        }
    });