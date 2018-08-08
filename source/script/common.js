accordeon('.section-team__btn');

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

