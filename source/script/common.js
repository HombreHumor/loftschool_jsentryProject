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

function mobilemenu(btn, closeBtn, menu) {
  $(btn).on('click', function () {
    $(menu).fadeIn(300);
  });
  $(closeBtn).on('click', function () {
    $(menu).fadeOut(300);
  });
}

accordeon('.section-team__btn');
accordeon('.section-menu__button');
mobilemenu('.hamburger-button', '.mobile__close', '.mobile');
