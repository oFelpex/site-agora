function myFunction(button) {
    button.classList.toggle("change");
    var menu = document.querySelector('.menu');
    var overlayForMenu = document.querySelector('.overlay_shadowForMenu');
    if (button.classList.contains("change")) {
        menu.style.left = '0';
        overlayForMenu.style.display = 'block';
        overlayForMenu.style.opacity = 1;
        
    } else {
        menu.style.left = '-200px';
        overlayForMenu.style.opacity = 0;
        overlayForMenu.style.display = 'none';
    }
    overlayForMenu.addEventListener('click', function() {
        var button = document.querySelector('.button_menu');
        myFunction(button);
    });
  }