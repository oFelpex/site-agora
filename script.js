function openOrCloseMenu(open) {
    var menu = document.querySelector('.menu');
    var overlayForMenu = document.querySelector('.overlay_shadowForMenu');
    menu.style.left = open ? '0' : '-200px';
    overlayForMenu.style.pointerEvents = open ? 'all' : 'none';
    overlayForMenu.style.opacity = open ? 1 : 0;
}
function changeButton_menu(button) {
    button.classList.toggle("change");
    openOrCloseMenu(button.classList.contains("change"));
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            button.classList.remove('change');
            openOrCloseMenu(false);
        }
    });
}
function closeMenu_overlayClicked() {
    var button = document.querySelector('.button_menu');
    changeButton_menu(button);
}

