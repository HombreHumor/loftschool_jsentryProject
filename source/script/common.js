function accordeon(btn) {
  $(btn).on('click', function () {
    let thisBtn = this;
    $(btn).each(function(index, element){
      let accordItem = $(this).parent();
      if(thisBtn == element) {
        if (accordItem.hasClass('active')) {
          accordItem.removeClass('active');
        } else {
          accordItem.addClass('active');
        }
      } else {
        if (accordItem.hasClass('active')) {
          accordItem.removeClass('active');
        }
      }
    })
  });
}

function mobilemenu(btn, closeBtn, menuItem, menu) {
  $(btn).on('click', function () {
    $(menu).fadeIn(300);
  });
  $(closeBtn).on('click', function () {
    $(menu).fadeOut(300);
  });
  $(menuItem).on('click', function () {
    $(menu).fadeOut(300);
  });
}

function carousel(container, prevBtn, nextBtn) {
  const carousel = $(container).owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    items: 1
  });

  $(nextBtn).click(function () {
    carousel.trigger('next.owl.carousel');
  });

  $(prevBtn).click(function () {
    carousel.trigger('prev.owl.carousel');
  });
}

function form() {
  $('#section-form__form').on('submit', function (event) {
    event.preventDefault();

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://webdev-api.loftschool.com/sendmail",
      "method": "POST",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "data": {
        "name": $('.section-form__input[name="name"]').val(),
        "phone": $('.section-form__input[name="phone"]').val(),
        "comment": $('.section-form__input[name="comment"]').val(),
        "to": "hombrehumor@gmail.com"
      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  });
}

function modal(params) {
  $(params.openBtn).on('click', function () {
    const inTitle = $(this).parent().parent().find(params.title).text();
    const inText = $(this).parent().parent().find(params.text).text();
    $(params.modal).find(params.modalTitle).text(inTitle);
    $(params.modal).find(params.modalText).text(inText);
    $(params.overlay).fadeIn();
    $(params.modal).fadeIn();

    $(params.closeBtn).on('click', function () {
      $(params.overlay).fadeOut();
      $(params.modal).fadeOut();
    })
  });
}

accordeon('.section-team__btn');
accordeon('.section-menu__button');
mobilemenu('.hamburger-button', '.mobile__close', '.mobile-nav__link', '.mobile');
carousel('.owl-carousel', '.slider-left__btn', '.slider-right__btn');
form();
modal({
  openBtn: '.review__view',
  title: '.review__title',
  text: '.review__text',
  modal: '.modal',
  overlay: '.overlay',
  modalTitle: '.modal__title',
  modalText: '.modal__text',
  closeBtn: '.modal__close'
});



