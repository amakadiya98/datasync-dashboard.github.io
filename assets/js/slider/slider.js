// // slider 

$(document).ready(function () {
  const $carousel = $(".market-carousel");

  $carousel.owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    dotsEach: 1,
    navText: [
      '<img src="../assets/images/left-arrow.svg" alt="prev">',
      '<img src="../assets/images/right-arrow.svg" alt="next">'
    ],
    responsive: {
      0: {
        items: 1.5,
        slideBy: 1,
      },
      1140: {
        items: 2,
        slideBy: 1,
      },
      1300: {
        items: 2.5,
        slideBy: 1,
      },
      1500: {
        items: 3,
        slideBy: 1,
      },
      1860: {
        items: 4,
        slideBy: 1,
      }
    },
    onInitialized: arrangeControls,
    onRefreshed: arrangeControls
  });

  function arrangeControls() {
    const $wrapper = $(".market-carousel-wrapper");
    const $nav = $wrapper.find(".owl-nav");
    const $dots = $wrapper.find(".owl-dots");

    // Move both nav and dots into market-controls
    const $controls = $wrapper.find(".market-controls");
    $controls.empty(); // clear any previous render

    $controls
      .append($nav.find('.owl-prev'))
      .append($dots)
      .append($nav.find('.owl-next'));
  }
});


// trendSl;ider
$(document).ready(function () {
  $(".trend-carousel").each(function (index) {
    const $carousel = $(this);
    const $dotsContainer = $carousel.closest(".trend-card, .support-card").find(".dots");

    $carousel.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 3000,
    });

    const totalSlides = $carousel.find('.owl-item:not(.cloned)').length;

    for (let i = 0; i < totalSlides; i++) {
      $dotsContainer.append(`<span data-slide="${i}"></span>`);
    }

    $dotsContainer.find("span").first().addClass("active");

    $dotsContainer.on("click", "span", function () {
      const index = $(this).data("slide");
      $carousel.trigger("to.owl.carousel", [index, 300]);

      $dotsContainer.find("span").removeClass("active");
      $(this).addClass("active");
    });

    $carousel.on("changed.owl.carousel", function (event) {
      const currentIndex = event.item.index;
      $dotsContainer.find("span").removeClass("active");
      $dotsContainer.find(`span[data-slide="${currentIndex}"]`).addClass("active");
    });
  });
});
