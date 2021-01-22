function topOffset() {

  if ($('#column_left')[0].getBoundingClientRect().top < 0 && !$('#column_left').hasClass('fixed')) {

    $('#column_left').removeClass('absolute');
    $('#column_left').addClass('fixed');
    console.log("more",$('#column_left').offset().top < 160,$('#column_left').offset().top);
  }
  else if ($('#column_left').offset().top <= 80 && !$('#MyElement').hasClass('absolute')){

      $('#column_left').removeClass('fixed');
      $('#column_left').addClass('absolute');
      console.log("less",$('#column_left')[0].getBoundingClientRect().top);
  }
  else {
    console.log("I broke it.");
  }

      //console.log($('#column_left').offset().top, "offset");
      //console.log($('#column_left')[0].getBoundingClientRect().top, "relative to viewport");

}

  document.addEventListener("scroll", function(){
    topOffset();
  });
