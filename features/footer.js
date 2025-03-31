import { socialLinks } from "../data-structures/links.js";
import { sectionsData } from "../data-structures/sections.js";

const footerLinks = document.querySelector("footer .links");
const socialsContainer = document.querySelector("footer .socials");

export const setupFooter = () => {
    sectionsData.map((section) => {
        const sectionLink = getLinkStructure(section);
        footerLinks.appendChild(sectionLink);
    });

    socialLinks.map((link) => {
        const socialLink = getSocialsStructure(link);
        socialsContainer.appendChild(socialLink);
    });
};

const getLinkStructure = (section) => {
    const a = document.createElement("a");
    a.href = section.id;
    a.textContent = section.name;
    return a;
};

const getSocialsStructure = (link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.innerHTML = `<img src="${link.icon}"/>`;
    a.target = "_blank";
    return a;
};
