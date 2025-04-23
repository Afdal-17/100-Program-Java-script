let gelap = false;
function toogleTheme() {
    document.body.style.backgroundColor = gelap ? "white" : "#333";
    document.body.style.color = gelap ? "black" : "white";
    gelap = !gelap;

}