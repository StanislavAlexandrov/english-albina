function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}

function themeToggle() {
    let toggleTheme = document.querySelector('.toggleTheme');
    if (toggleTheme.innerText == 'regular mode') {
        toggleTheme.innerText = 'dark mode';
    } else {
        toggleTheme.innerText = 'regular mode';
    }

    document.body.classList.toggle('dark-theme');
}
