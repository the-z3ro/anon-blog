// Custom JavaScript
console.log('Custom JS loaded!');

// Example: Add reading progress bar
window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // You can use this scrolled percentage
    console.log('Scrolled: ' + scrolled + '%');
});
