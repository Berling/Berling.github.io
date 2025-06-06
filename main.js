import App from "./app/app.component.js"
import TopNav from "./app/top-nav/top-nav.component.js"
import SocialMediaList from "./app/social-media-list/social-media-list.component.js"
import HomeSection from "./app/home-section/home-section.component.js"
import AboutSection from "./app/about-section/about-section.component.js"
import ContentSection from "./app/content-section/content-section.component.js"
import EventList from "./app/event-list/event-list.component.js"
import BandList from "./app/band-list/band-list.component.js"
import DonationList from "./app/donation-list/donation-list.component.js"
import ContactSection from "./app/contact-section/contact-section.component.js"
import BottomNav from "./app/bottom-nav/bottom-nav.component.js"
import ImprintSection from "./app/imprint-section/imprint-section.component.js"
import GdprSection from "./app/gdpr-section/gdpr-section.component.js"

async function waitForAllComponents() {
    document.body.hidden = true;
    const hash = location.hash;
    location.hash = "";
    return Promise.all(
        [...document.querySelectorAll(":not(:defined)")]
            .map(el => customElements.whenDefined(el.localName))
    ).then(() => {
        document.body.hidden = false;
        location.hash = hash;
    });
}

export default await waitForAllComponents();