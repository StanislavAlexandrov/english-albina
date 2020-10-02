function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}

function themeToggle() {
    let toggleTheme = document.querySelector('.toggleTheme');
    if (toggleTheme.innerText == '🌞') {
        toggleTheme.innerText = '🌚';
    } else {
        toggleTheme.innerText = '🌞';
    }

    document.body.classList.toggle('dark-theme');
}
