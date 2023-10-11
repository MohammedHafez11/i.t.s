(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      if (!header.classList.contains('header-scrolled')) {
        offset -= 20
      }
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('fa-bars')
      this.classList.toggle('fa-times')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      });
    }
  
    /**
     * Initiate gallery lightbox 
     */
    /*const galleryLightbox = GLightbox({
      selector: '.gallery-lightbox'
    });*/
      var galleryLightbox = GLightbox({
          selector: '.gallery-lightbox'
      });
      var galleryLightbox = GLightbox({
          selector: '.gallery-lightbox2'
      });
      var galleryLightbox = GLightbox({
          selector: '.gallery-lightbox3'
      });
      var galleryLightbox = GLightbox({
          selector: '.gallery-lightbox4'
      });
  
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
  
  })()
  
  /* OWL -------------*/
var owl = $('#web_latest');
owl.owlCarousel({
items: 3,
pullDrag: true,
margin: 20,
loop: true,
nav: true, 
dots: false,
responsiveClass:true,
  //autoWidth:true,
  video:true,
  touchDrag: true,
  autoplay:false,
  autoplayTimeout:3500,
  smartSpeed : 450,
rtl: true,
  //videoWidth: 600,
  lazyLoad:true, //doesnt actually works but stop slides disappearing?
navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>', '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
navContainer: '.custom-web',
responsive: {
    0: {
      items: 1,
      nav: false, 
dots: true
    },
    700: {
      items: 1,
      nav: false,
    },
    1000: {      
      items: 2,
      nav: false, 
    },
    1200: {      
      items: 3,
      nav: false, 
autoplay:true,
dots: false
    }
  }

})
/* OWL -------------*/
var owl = $('#app_latest');
owl.owlCarousel({
items: 3,
pullDrag: true,
margin: 20,
loop: true,
nav: true, 
dots: false,
responsiveClass:true,
  //autoWidth:true,
  video:true,
  touchDrag: true,
  autoplay:false,
  autoplayTimeout:3500,
  smartSpeed : 450,
rtl: true,
  //videoWidth: 600,
  lazyLoad:true, //doesnt actually works but stop slides disappearing?
  navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>', '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
navContainer: '.custom-app',
responsive: {
    0: {
      items: 1,
      nav: false, 
dots: true
    },
    700: {
      items: 1,
      nav: false,
    },
    1000: {      
      items: 2,
      nav: false, 
    },
    1200: {      
      items: 3,
      nav: false, 
autoplay:true,
dots: false
    }
  }

})
/* OWL -------------*/
var owl = $('#graphic_latest');
owl.owlCarousel({
items: 3,
pullDrag: true,
margin: 20,
loop: true,
nav: true, 
dots: false,
responsiveClass:true,
  //autoWidth:true,
  video:true,
  touchDrag: true,
  autoplay:false,
  autoplayTimeout:3500,
  smartSpeed : 450,
rtl: true,
  //videoWidth: 600,
  lazyLoad:true, //doesnt actually works but stop slides disappearing?
  navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>', '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
navContainer: '.custom-graphic',
responsive: {
    0: {
      items: 1,
      nav: false, 
dots: true
    },
    700: {
      items: 1,
      nav: false,
    },
    1000: {      
      items: 2,
      nav: false, 
    },
    1200: {      
      items: 3,
      nav: false, 
autoplay:true,
dots: false
    }
  }

})
/* OWL -------------*/
var owl = $('#social_latest');
owl.owlCarousel({
items: 3,
pullDrag: true,
margin: 20,
loop: true,
nav: true, 
dots: false,
responsiveClass:true,
  //autoWidth:true,
  video:true,
  touchDrag: true,
  autoplay:false,
  autoplayTimeout:3500,
  smartSpeed : 450,
rtl: true,
  //videoWidth: 600,
  lazyLoad:true, //doesnt actually works but stop slides disappearing?
  navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>', '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
navContainer: '.custom-social',
responsive: {
    0: {
      items: 1,
      nav: false, 
dots: true
    },
    700: {
      items: 1,
      nav: false,
    },
    1000: {      
      items: 2,
      nav: false, 
    },
    1200: {      
      items: 3,
      nav: false, 
autoplay:true,
dots: false
    }
  }

})
/* OWL -------------*/
var owl = $('#owl_partners');
owl.owlCarousel({
items: 5,
pullDrag: true,
margin: 5,
loop: true,
nav: true, 
dots: false,
responsiveClass:true,
  autoWidth:false,
  video:false,
  touchDrag: true,
slideTransition: 'linear',
autoplayTimeout: 8000,
autoplaySpeed: 8000,
autoplayHoverPause: true,
rtl: true,
  //videoWidth: 600,
  lazyLoad:true, //doesnt actually works but stop slides disappearing?
  navText: ['<i class="fas fa-arrow-left" aria-hidden="true"></i>', '<i class="fas fa-arrow-right" aria-hidden="true"></i>'],
navContainer: '.custom-partners',
responsive: {
    0: {
      items: 1,
      nav: false, 
dots: true
    },
    700: {
      items: 2,
      nav: false, 
dots: true
    },
    1000: {      
      items: 3,
      nav: false, 
dots: true
    },
    1200: {      
      items: 6,
      nav: false, 
autoplay:true,
dots: true
    }
  }

})