function topOffset() {
  //var $el = $('#column_left')
  var bottom_loc = $('#column_left').offset().top + document.getElementById("column_left").style.height;
  console.log(bottom_loc);
  if ($('#column_left')[0].getBoundingClientRect().top < 0 && !$('#column_left').hasClass('fixed')) {

    $('#column_left').removeClass('absolute');
    $('#column_left').addClass('fixed');
    //console.log("more",$('#column_left').offset().top < 160,$('#column_left').offset().top);
  }
  else if ($('#column_left').offset().top <= 80 && !$('#column_left').hasClass('absolute')){

      $('#column_left').removeClass('fixed');
      $('#column_left').addClass('absolute');
      //console.log("less",$('#column_left')[0].getBoundingClientRect().top);
  }
  //else if ($('#column_left').offset().top)

  else {
    console.log("I broke it or it is past.");
  }

      //console.log($('#column_left').offset().top, "offset");
      //console.log($('#column_left')[0].getBoundingClientRect().top, "relative to viewport");

}
if (window.matchMedia('(min-width:751px;)').matches)
  document.addEventListener("scroll", topOffset, true);
else {
  document.removeEventListener('scroll', topOffset, true);
  $('#column_left').removeClass('fixed');
  $('#column_left').removeClass('absolute');
  console.log('helllllooo');
}



window.matchMedia('(min-width:751px;)').addEventListener('change', function(event){
  if (event.matches)
    document.addEventListener('scroll', topOffset, true);
  else {
    document.removeEventListener('scroll', topOffset, true);
    $('#column_left').removeClass('fixed');
    $('#column_left').removeClass('absolute');
    console.log('heloo');
  }
});
