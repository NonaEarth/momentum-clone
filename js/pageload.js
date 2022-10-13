let animationControl = function() {

    let firstProperty = document.getElementsByClassName('bg-opacity-control');

    for (let index = 0; index < firstProperty.length; index++) {
        firstProperty[index].style.animation = 'opacityup 0.8s ease-in 1';
        firstProperty[index].style.opacity = '1';
    }

    let secondProperty = document.getElementsByClassName('opacity-control');

    for (let index = 0; index < secondProperty.length; index++) {
        secondProperty[index].style.animation = 'opacityup 1.6s ease-out 1';
        secondProperty[index].style.opacity = '1';
    }
}

window.addEventListener('load', animationControl);