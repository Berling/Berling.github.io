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

listBands();
listDonations();