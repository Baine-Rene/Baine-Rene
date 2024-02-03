  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  function toggleHamburger(button) {
    button.classList.toggle('is-active');
  }
  
    // Look for .hamburger
    var hamburger = document.querySelector(".hamburger");
    // On click
    hamburger.addEventListener("click", function() {
      // Toggle class "is-active"
      hamburger.classList.toggle("is-active");
      // Do something else, like open/close menu
    });

// Initiate the wowjs


 // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
            return false;
        });

