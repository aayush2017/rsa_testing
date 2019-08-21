var $animation_elements = $('.animation');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  $("#wt").html(window_top_position);
 $("#wh").html(window_height);
 $("#wb").html(window_bottom_position);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
 $("#et").html(element_top_position);
 $("#eh").html(element_height);
 $("#eb").html(element_bottom_position);
  });


}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');