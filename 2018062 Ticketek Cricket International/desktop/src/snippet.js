    $('#eventsPageContainerInner .tab-item').on('click', function (e) {
        $('#eventsPageContainerInner .tab-item').removeClass('active');
        $(this).addClass('active');
        var current = $(this).data('attr', current);
        $("#eventsPageContainerInner .match-container").children().removeClass('show').addClass('hide');
        $("#eventsPageContainerInner .match-container").find(`#${current}`).addClass('show').removeClass('hide');
    });
    $( document ).ready(function() {
        var deadline = 'Wed, 31 Oct 2018 00:01:00 GMT+1000';
          initializeClock('clockdiv', deadline);
        
          if($('.days').text() == '0'){
            $('.days').parent().hide()
          }
        });
        
