/*
 * When user clicks the hamburger menu check to see if it is open.
 * if its not then set the .container grid-template-rows to 
 *      500px fit-content(200px) 1fr;
 * the .linkbar navs display should be set to block
 * 
 * if it is open then set it to the default which is 
 *      75px fit-content(200px) 1fr
 * the linkbar navs should be set to none
 */

let isOpen = false;

function openLinkBar() {
    const navLinks = document.getElementsByClassName("links");
    const container = document.getElementById("container");

    console.log(container);

    if (!isOpen) {
        navLinks[0].style.display = "block";
        navLinks[1].style.display = "block";
        container.style.gridTemplateRows = "500px fit-content(200px) 1fr";
        isOpen = true;
    } else {
        navLinks[0].style.display = "none";
        navLinks[1].style.display = "none";
        container.style.gridTemplateRows = "75px fit-content(200px) 1fr";
        isOpen = false;
    }
}