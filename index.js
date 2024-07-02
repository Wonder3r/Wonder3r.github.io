let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("picture");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = slideIndex - 1; i < slideIndex + 2 && i < slides.length; i++) {
        slides[i].style.display = "inline-block";  
    }
}

/* Nav bar */
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(item => {
        item.addEventListener('click', event => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                event.preventDefault();
                submenu.classList.toggle('active');
            }
        });
    });
});

