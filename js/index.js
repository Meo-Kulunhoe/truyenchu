// slick slide
$('.list-product').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  adaptiveHeight: true,
  accessibility: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});
// Kiểm tra kích thước cửa sổ trình duyệt
function isMobileViewport() {
  return window.innerWidth < 1024;
}

// Khởi chạy Slick chỉ trên thiết bị di động
if (isMobileViewport()) {
  $('.list-project').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    adaptiveHeight: true,
    accessibility: true,
    centerMode: true,
  });
}

// menu
(function ($) {
  $.fn.menumaker = function (options) {
    var mainmn = $(this),
      settings = $.extend({
        format: "dropdown",
        sticky: false
      }, options);
    return this.each(function () {
      $(this).find(".button").on('click', function () {
        $(this).toggleClass('menu-opened');
        var mainmenu = $(this).next('ul');
        if (mainmenu.hasClass('open')) {
          mainmenu.slideToggle().removeClass('open');
        } else {
          mainmenu.slideToggle().addClass('open');
          if (settings.format === "dropdown") {
            mainmenu.find('ul').show();
          }
        }
      });
      mainmn.find('li ul').parent().addClass('has-sub');
      multiTg = function () {
        mainmn.find(".has-sub").prepend('<span class="submenu-button"></span>');
        mainmn.find('.submenu-button').on('click', function () {
          $(this).toggleClass('submenu-opened');
          if ($(this).siblings('ul').hasClass('open')) {
            $(this).siblings('ul').removeClass('open').slideToggle();
          } else {
            $(this).siblings('ul').addClass('open').slideToggle();
          }
        });
      };
      if (settings.format === 'multitoggle') multiTg();
      else mainmn.addClass('dropdown');
      if (settings.sticky === true) mainmn.css('position', 'fixed');
      resizeFix = function () {
        var mediasize = 1000;
        if ($(window).width() > mediasize) {
          mainmn.find('ul').show();
        }
        if ($(window).width() <= mediasize) {
          mainmn.find('ul').hide().removeClass('open');
        }
      };
      resizeFix();
      return $(window).on('resize', resizeFix);
    });
  };
})(jQuery);
(function ($) {
  $(document).ready(function () {
    $("#main-menu").menumaker({
      format: "multitoggle"
    });
  });
})(jQuery);


jQuery.noConflict();
jQuery(document).ready(function ($) {
  $('.menu-cas-toggler').click(function () {
    $("body").toggleClass('no_scroll');
  });
});
jQuery.noConflict();
jQuery(document).ready(function ($) {
  $(function () {
    initDropDowns($("#menu-cas"));
  });
  function initDropDowns(allMenus) {
    allMenus.children(".menu-cas-toggler").on("click", function () {
      var thisTrigger = jQuery(this),
        thisMenu = thisTrigger.parent(),
        thisPanel = thisTrigger.next();
      if (thisMenu.hasClass("open")) {
        thisMenu.removeClass("open");
        jQuery(document).off("click");
        thisPanel.off("click");
      }
      else {
        allMenus.removeClass("open");
        thisMenu.addClass("open");
        jQuery(document).on("click", function () {
          allMenus.removeClass("open");
        });
        thisPanel.on("click", function (e) {
          e.stopPropagation();
        });
      }
      return false;
    });
  }
});
jQuery.noConflict();
jQuery(document).ready(function ($) {
  $(document).ready(function () {
    $(".nav li a").each(function () {
      if ($(this).next().length > 0) {
        $(this).addClass("parent");
      };
    })
  })
  $(function () {
    $(".nav li").unbind('mouseenter mouseleave');
    $(".nav li a.parent").unbind('click').bind('click', function (e) {
      e.preventDefault();
      $(this).parent("li").toggleClass("hover");
    });
  });
});
//   backtotop
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function (event) {
    var vitri = window.pageYOffset || document.documentElement.scrollTop;
    var backtotop = document.querySelector('.backtotop');

    if (vitri < 400) {
      backtotop.classList.remove('show-backtotop1');
    } else if (vitri < 600) {
      backtotop.classList.add('show-backtotop1');
      backtotop.classList.remove('show-backtotop2');
    } else if (vitri < 1100) {
      backtotop.classList.add('show-backtotop2');
      backtotop.classList.remove('show-backtotop3');
    } else if (vitri < 1800) {
      backtotop.classList.add('show-backtotop3');
      backtotop.classList.remove('show-backtotop4');
    } else if (vitri < 2500) {
      backtotop.classList.add('show-backtotop4');
      backtotop.classList.remove('show-backtotop');
    } else {
      backtotop.classList.add('show-backtotop');
    }
  });

  var backtotop = document.querySelector('.backtotop');
  backtotop.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


