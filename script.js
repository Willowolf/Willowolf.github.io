window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var distanceFromTop = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= distanceFromTop) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
