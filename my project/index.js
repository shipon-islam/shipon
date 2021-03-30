var para = document.querySelector('.main');
var meanMenu = document.querySelector('#nab');
var form = document.querySelector('#form');

function btn() {
    if (meanMenu.style.left == ('-400px')) {
        meanMenu.style.left = '0';
        form.style.left = '155px';

    } else {
        meanMenu.style.left = ('-400px');
        form.style.left = ('-400px');

    }


}