
const fizz = document.getElementById("fizz");
const can = document.getElementById("canCutOut");

fizz.style.visibility = "hidden"


$(".move-area").mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 200;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

  can.addEventListener("mouseenter", () => {
    fizz.style.visibility = "visible"
  });

  can.addEventListener("mouseleave", () => {
    fizz.style.visibility = "hidden"
  });

