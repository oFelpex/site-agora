function nextImage() {
    let count = 2;
    let interval;
    let slider = document.getElementById("slider");
    function startInterval() {
        interval = setInterval(function() {
            document.getElementById("radio" + count).checked = true;
            count++;
            count = count > 4 ? 1 : count;
        }, 8000);
    }
    slider.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    slider.addEventListener('mouseleave', () => {
        startInterval();
    });
    startInterval();
}
function closeNavBar() {
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('orangeBar_navigationBar');
        if (window.scrollY >= 800) {
            navbar.style.position = 'absolute';
            navbar.style.top = '800px';
        } else {
            navbar.style.position = 'fixed';
            navbar.style.top = '0px';
        }
    });
}
nextImage();
closeNavBar();
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