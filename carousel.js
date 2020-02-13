(function() {

  const SLIDE_TIMER = 2000; // ms

  const carousels = 
  document.querySelectorAll('.carousel-wrapper');
  
  carousels.forEach( carousel => startCarousel(carousel) );
  
  function startCarousel (carousel) {

    let paused = true;

    const slides = carousel.querySelectorAll('.carousel-photo');

    initializeElementClasses();

    initializeElementEventHandlers();
    
    if ( ! paused ) {
      setTimeout(nextSlide , SLIDE_TIMER);
    }

    function nextSlide() {

      console.log('should switch');

      const active = carousel.querySelector('.active.carousel-photo');
      const next = carousel.querySelector('.next.carousel-photo');
      const prev = carousel.querySelector('.prev.carousel-photo');

      prev.classList.remove('prev');

      active.classList.remove('active');
      active.classList.add('prev');

      next.classList.remove('next');
      next.classList.add('active');

      let newNext = next.nextElementSibling;

      if (! newNext || ! newNext.classList.value.includes('carousel-photo') ) {
        newNext = slides[0];
      }

      newNext.classList.add('next');

      // if we aren't paused
      if ( ! paused ) {
        // schedule the next slide transition
        setTimeout(nextSlide , SLIDE_TIMER);
      }
    }

    function prevSlide() {

      console.log('should switch');

      const active = carousel.querySelector('.active.carousel-photo');
      const next = carousel.querySelector('.next.carousel-photo');
      const prev = carousel.querySelector('.prev.carousel-photo');

      next.classList.remove('next');

      active.classList.remove('active');
      active.classList.add('next');

      prev.classList.remove('prev');

      prev.classList.add('active');
    
      let newPrev = prev.previousElementSibling;

      if ( ! newPrev || ! newPrev.classList.value.includes('carousel-photo') ) {
        newPrev = slides[ slides.length - 1 ];
      }

      newPrev.classList.add('prev');

    }

    function initializeElementClasses() {
      
      
      const initial = carousel.querySelector('.initial.carousel-photo') || slides[0];

      const next = initial.nextElementSibling || slides[0];
      const prev = initial.prevElementSibling || slides[slides.length - 1];

      initial.classList.add('active');
      initial.classList.remove('initial');

      next.classList.add('next');
      prev.classList.add('prev');

    }
      function initializeElementEventHandlers() {

        const nextButton = carousel.querySelector('.carousel-button.next');
        const prevButton = carousel.querySelector('.carousel-button.prev');

        nextButton.addEventListener('click' , () => {

          paused = true
          nextSlide();

        } );

        prevButton.addEventListener('click' , () => {

          paused = true
          prevSlide();

        } );

      }
  }

} () );