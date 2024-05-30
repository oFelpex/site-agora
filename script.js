function myFunction(x) {
    x.classList.toggle("change");
    var menu = document.querySelector('.menu');
    if (x.classList.contains("change")) {
        menu.style.left = '0';
    } else {
        menu.style.left = '-200px';
    }
  }