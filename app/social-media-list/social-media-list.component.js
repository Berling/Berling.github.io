import defineComponent from "../../component.js"

export default await defineComponent(
    "social-media-list",
    "./app/social-media-list/social-media-list.component.html",
    "./app/social-media-list/social-media-list.component.css",
    class SocialMediaList extends HTMLElement {
        constructor() {
            super();
        }
    });