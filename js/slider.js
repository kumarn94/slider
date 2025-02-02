jQuery(document).ready(function($) {

var slides = $('ul.slideset li');
var switchers = $('ul.switcher li');
var slidesCount = slides.length;

switchers.first().addClass('active');

function slide(target) {
    slides.removeClass('active').eq(target).addClass('active');
    switchers.removeClass('active').eq(target).addClass('active');
}

switchers.on('mouseenter',function() {
    if ( !$(this).hasClass('active') ) {
        slide($(this).index());
        resetTimer();
    }
});

$('.btn-next').click(function() {
    slide(getTarget());
    resetTimer();
});
$('.btn-prev').click(function() {
    slide(getTarget(-1));
    resetTimer();
});

function getTarget(dir){
	var ind = $('ul.switcher li.active').index();
	//console.log(ind +(dir||1));
	return  (ind +(dir||1)) % slidesCount;
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function() { slide(getTarget()); },5000);
}

var timer = setInterval(function() { slide(getTarget()); },5000);





var lp, rp, mItems, menu, sc, pos;
lp = $(".left-pointer");
rp = $(".right-pointer");
mItems = $(".switcher");
// var tItemsWidth = 0;
// mItems.find("a").each(function(){
//   tItemsWidth += $(this).outerWidth(true);
// });
// $(".switcher a").click(function(){
//   $(".switcher a").removeclass('active');
//   $(this).addclass('active');
// });

lp.click(function(){
	sc = mItems.width() - 500;
  pos = mItems.scrollLeft() - sc;
  mItems.animate({'scrollLeft': pos}, 'slow');
});
rp.click(function(){
  sc = mItems.width() - 500;
  pos = mItems.scrollLeft() + sc;
  mItems.animate({'scrollLeft': pos}, 'slow');
});
var scrollLeftPrev = 0; 
mItems.scroll(function(){
  var newScrollLeft = mItems.scrollLeft(),width=mItems.width(),
            scrollWidth=mItems.get(0).scrollWidth;
  var offset=8;
  console.log(scrollWidth - newScrollLeft - width);
  if (scrollWidth - newScrollLeft - width < offset) {
            console.log('right end');
    $(".right-pointer").addClass("dis");
  }else{
    $(".right-pointer").removeClass("dis");
  }
  if( $(this).scrollLeft() == 0){
    $(".left-pointer").addClass("dis");
  }else{
    $(".left-pointer").removeClass("dis");
  }
  scrollLeftPrev = newScrollLeft;
});

const slider1 = document.querySelector('.switcher');
let isDown = false;
let startX;
let scrollLeft;
slider1.addEventListener('mousedown', (e) => {
  isDown = true;
  slider1.classList.add('active');
  startX = e.pageX - slider1.offsetLeft;
  scrollLeft = slider1.scrollLeft;
});
slider1.addEventListener('mouseleave', () => {
  isDown = false;
  slider1.classList.remove('active');
});
slider1.addEventListener('mouseup', () => {
  isDown = false;
  slider1.classList.remove('active');
});
slider1.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider1.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider1.scrollLeft = scrollLeft - walk;
});
});
// end ready function here.
    
