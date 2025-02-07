function preventDefault(e) {
    e.preventDefault();
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    var modal = document.getElementById("modal");
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
    document.getElementById("menu").style.display = "none";
    document.getElementById("modal").style.display = "none";
}