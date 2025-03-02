function preventDefault(e) {
    e.preventDefault();
}

function toggleMenu() {
    let menu = document.getElementById("menu");
    let modal = document.getElementById("modal");
    if (menu.style.display === "block") {
        document.body.style.overflow = "unset";
        menu.style.display = "none";
        modal.style.display = "none";
    } else {
        document.body.style.overflow = "hidden";
        menu.style.display = "block";
        modal.style.display = "block";
    }
}

function closeMenu() {
    document.body.style.overflow = "unset";
    document.getElementById("menu").style.display = "none";
    document.getElementById("modal").style.display = "none";
}

async function listEvents() {
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
    let upcomingEvents = events.filter((event) => event.date >= today);
    let upcomingList = document.getElementById("upcoming-list");
    upcomingEvents.forEach(event => {
        let upcomingEntry = upcomingList.appendChild(document.createElement("li"));
        upcomingEntry.classList += "upcoming-entry";
        let content = upcomingEntry.appendChild(document.createElement("a"));
        content.href = "https://www.facebook.com/events/" + event.eventId;
        content.textContent = event.date.toLocaleDateString() + " - " + event.bands;
    });
    let pastEvents = events.filter((event) => event.date < today);
    let pastList = document.getElementById("past-list");
    pastEvents.forEach(event => {
        let pastEntry = pastList.appendChild(document.createElement("li"));
        pastEntry.classList += "past-entry";
        let content = pastEntry.appendChild(document.createElement("a"));
        content.href = "https://www.facebook.com/events/" + event.eventId;
        content.textContent = event.date.toLocaleDateString() + " - " + event.bands;
    });
}

async function listBands() {
    let response = await fetch("content/bands");
    if (response.status != 200) {
        return;
    }

    let text = await response.text();
    let bands = text.split("\n").sort().join(" | ");
    document.getElementById("band-list").textContent = bands;
}

async function listDonations() {
    let response = await fetch("content/donations");
    if (response.status != 200) {
        return;
    }

    let text = await response.text();
    let donations = text.split("\n");
    let donationList = document.getElementById("donation-list");
    donations.forEach(donation => {
        let donationEntry = donationList.appendChild(document.createElement("li"));
        donationEntry.classList += "donation-entry";
        donationEntry.textContent = donation;
    });
}

listEvents();
listBands();
listDonations();