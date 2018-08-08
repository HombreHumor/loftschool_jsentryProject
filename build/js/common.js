'use strict';

accordeon('.section-team__btn');
accordeon('.section-menu__button');

function accordeon(btn) {
  $(btn).on('click', function () {
    var thisBtn = this;
    $(btn).each(function (index, element) {
      var accordItem = $(this).parent();
      if (thisBtn == element) {
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
    });
  });
}