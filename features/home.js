const downloadResumeButton = document.querySelector(".download-resume");
const buttonText = downloadResumeButton.querySelector(".text");
const buttonIcon = downloadResumeButton.querySelector(".icon");

export const setupHome = () => {
    downloadResumeButton.addEventListener("click", downloadResume);
};

const downloadResume = () => {
    const originalSrc = buttonIcon.src;

    buttonText.textContent = "Complete";
    buttonIcon.src = "./images/icons/check.svg";
    downloadResumeButton.classList.add("complete");

    setTimeout(() => {
        buttonText.textContent = "Resume";
        buttonIcon.src = originalSrc;
        downloadResumeButton.classList.remove("complete");
    }, 3000);
};
