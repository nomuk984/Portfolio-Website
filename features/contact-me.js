import { socialLinks } from "../data-structures/links.js";

const socialsContainer = document.querySelector("#contact-me .socials");
const form = document.querySelector("#form");
const submitButton = document.querySelector("#contact-me button");

export const setupContactMe = () => {
    socialLinks.map((link) => {
        const linkStructure = getLinkStructure(link);
        socialsContainer.appendChild(linkStructure);
    });

    form.addEventListener("submit", sendEmail);
};

const getLinkStructure = (link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";
    a.innerHTML = `<img src="${link.icon}"/>`;
    return a;
};

const sendEmail = async (e) => {
    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
        await emailjs.sendForm(
            "service_mtf78dr",
            "template_50tooda",
            "#form",
            "xzqOCVDnTedmG_7YL"
        );
        alert("✅ Message sent successfully");
    } catch (error) {
        alert("❌ Message not sent (service error)");
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
        form.requestFullscreen();
    }
};
