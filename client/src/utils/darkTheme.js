export const checkDarkTheme = () => {
    let isDarkMode = JSON.parse(localStorage.getItem("darkTheme")) ? true : false;

    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    return isDarkMode;
}