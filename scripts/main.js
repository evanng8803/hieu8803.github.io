// Smooth Scroll Script
document.addEventListener('DOMContentLoaded', function() {
    let allLinks = document.querySelectorAll('a');
  
    allLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        let targetId = link.getAttribute('href').substring(1);
        let targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          e.preventDefault(); // Prevent default behavior of anchor tag if target element exists
          window.scrollTo({
            top: targetElement.offsetTop, // Scroll to the top position of target element
            behavior: 'smooth'
          });
        }
      });
    });
  });
  