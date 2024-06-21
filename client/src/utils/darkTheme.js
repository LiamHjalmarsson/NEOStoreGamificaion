export const checkDarkTheme = () => {
    let isDarkMode = localStorage.getItem("darkTheme") === "true";

    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    }

    return isDarkMode;
}