function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    
    // Toggle the 'active' class for the menu and 'open' class for the hamburger icon
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
}

// Close the menu when a menu item is clicked
const menuItems = document.querySelectorAll('.menu ul li a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        const hamburger = document.getElementById('hamburger');
        
        menu.classList.remove('active');
        hamburger.classList.remove('open');
    });
});
