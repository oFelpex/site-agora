function myFunction(x) {
    x.classList.toggle("change");
    var menu = document.querySelector('.menu');
    var overlayForMenu = document.querySelector('.overlay_shadowForMenu');
    if (x.classList.contains("change")) {
        menu.style.left = '0';
        overlayForMenu.style.opacity = 1;
    } else {
        menu.style.left = '-200px';
        overlayForMenu.style.opacity = 0;
    }
  }