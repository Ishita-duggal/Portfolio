const toggleThemeButton = document.getElementById('toggle-theme');

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        document.documentElement.style.setProperty('--primary-color', '#f4f4f4');
        document.documentElement.style.setProperty('--secondary-color', '#333');
        document.documentElement.style.setProperty('--text-color', '#333');
    } else {
        document.documentElement.style.setProperty('--primary-color', '#333');
        document.documentElement.style.setProperty('--secondary-color', '#f4f4f4');
        document.documentElement.style.setProperty('--text-color', '#fff');
    }
});