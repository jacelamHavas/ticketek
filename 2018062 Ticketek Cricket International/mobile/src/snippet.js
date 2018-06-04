// Retrieve the utils library
var utils = window["optimizely"].get('utils');

// Wait for the footer element to appear in the DOM, then change the color
utils.waitForElement('.eventModuleWrap').then(function(element) {
  $(element).parent().replaceWith(html);
  
  $('#eventsPageContainerInner .tab-item').on('click', function (e) {
    $('#eventsPageContainerInner #nav-page').removeClass('show').addClass('hide');
    $('#eventsPageContainerInner #match-page').removeClass('hide').addClass('show');
    var current = $(this).data('attr');
    $("#eventsPageContainerInner .match-container").children().removeClass('show').addClass('hide');
    $("#eventsPageContainerInner .match-container").find('#' + current).addClass('show').removeClass('hide');
    $("#eventsPageContainerInner").find('#region').html(current);
  });
  $('#eventsPageContainerInner #backlink').on('click', function (e) {
      $('#eventsPageContainerInner #match-page').removeClass('show').addClass('hide');
      $('#eventsPageContainerInner #nav-page').removeClass('hide').addClass('show');
  });
});