import { sectionsData } from "../data-structures/sections.js";

const menu = document.querySelector(".menu");
const openMenuButtons = document.querySelectorAll(".open-menu");
const closeMenuButton = document.querySelector(".close-menu");
const navLinksContainer = document.querySelectorAll(".nav-links");
const nav = document.querySelector("nav");
const homeNavigation = document.querySelector("#home .navigation");
const scrollUp = document.querySelector(".scroll-up");
const sections = document.querySelectorAll("section");

export const setupNavigation = () => {
    openMenuButtons.forEach((button) => {
        button.addEventListener("click", () => {
            menu.classList.add("active");
        });
    });

    closeMenuButton.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    navLinksContainer.forEach((container) => {
        sectionsData.forEach((section) => {
            const linkStructure = getNavLinkStructure(section);
            container.appendChild(linkStructure);
        });
    });

    window.addEventListener("scroll", () => {
        revealNavBar();
        revealScrollUp();
        highlightCurrentSection();
    });
};

const revealNavBar = () => {
    const { bottom } = homeNavigation.getBoundingClientRect();
    nav.classList.toggle("active", bottom < 0);
};

const revealScrollUp = () => {
    scrollUp.classList.toggle("active", window.scrollY >= 350);
};

const highlightCurrentSection = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const id = section.id;
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const isActive = scrollY > top && scrollY <= bottom;

        const navLinks = document.querySelectorAll(
            `.nav-links a[href="#${id}"]`
        );

        navLinks.forEach((link) => link.classList.toggle("active", isActive));
    });
};

const getNavLinkStructure = (section) => {
    const a = document.createElement("a");
    a.href = section.id;
    a.textContent = section.name;
    return a;
};
