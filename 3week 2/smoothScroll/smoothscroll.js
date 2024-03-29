// Smoothscroll Script...
$('nav ul li a').click(function () {
  const thisSection = $(this).attr('href');
  let thisLink = $(this);

  $('html, body').stop().animate({
    scrollTop: $(thisSection).offset().top - 200
  }, 800, 'easeOutCirc');

  return false;
});

$(window).on('load', function () {
  let allLinks = $(`nav ul li a`);
  let posts = $('section');
  let pageTop;
  let postPos;
  let counter = 0;
  let prevCounter = 0;
  let doneResizing;

  let postTops = [];
  resetPagePosition();

  $(window).scroll(function () {
    pagetop = $(window).scrollTop() + 210;
    if (pagetop > postTops[counter + 1]) {
      counter++;
    } else if (counter > 0 && pagetop < postTops[counter]) {
      counter--;
    }
    if (counter !== prevCounter) {
      $(allLinks).removeAttr('class');
      $("nav ul li a").eq(counter).addClass('selected');
      prevCounter = counter;
    }
  });
  $(window).on('resize', function () {
    clearTimeout(doneResizing);
    doneResizing = setTimeout(function () {

      resetPagePosition();

    }, 500);
  });

  function resetPagePosition() {
    postTops = [];

    posts.each(function () {
      postTops.push(Math.floor($(this).offset().top));
    });
    let pagePosition = $(window).scrollTop() + 210;
    counter = 0;

    for (let i = 0; i < postTops.length; i++) {
      if (pagePosition > postTops[i]) {
        counter++;
      }
    }
    counter--;

    $(allLinks).removeAttr('class');
    $("nav ul li a").eq(counter).addClass('selected');
  }
});