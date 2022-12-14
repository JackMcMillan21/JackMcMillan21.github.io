const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbarLinksEnclosing = document.getElementsByClassName("navbar-links-enclosing")[0];

toggleButton.addEventListener('click', () =>{
    navbarLinksEnclosing.classList.toggle("active");
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle("active");
})