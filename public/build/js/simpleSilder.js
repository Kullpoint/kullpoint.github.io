

const simpleSilder = () => {

   new SimpleSlider('.simple-slider-first', {
      speed: 600,
      autoplay: true,
      delay: 3000,
      slidesPerView: {
         576: 3,
         0: 1
      }
   });

}

simpleSilder();