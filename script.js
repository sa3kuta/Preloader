window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');

    preloader.style.display = 'none'; 
    content.style.display = 'block';   
    document.body.style.overflow = 'auto'; 
});