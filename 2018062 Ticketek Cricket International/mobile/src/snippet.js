$('#eventsPageContainerInner .tab-item').on('click', function (e) {
    $('#eventsPageContainerInner #nav-page').removeClass('show').addClass('hide');
    $('#eventsPageContainerInner #match-page').removeClass('hide').addClass('show');
    var current = $(this).data('attr', current);
    $("#eventsPageContainerInner .match-container").children().removeClass('show').addClass('hide');
    $("#eventsPageContainerInner .match-container").find(`#${current}`).addClass('show').removeClass('hide');
    $("#eventsPageContainerInner").find('#region').html(current);
});
$('#eventsPageContainerInner #backlink').on('click', function (e) {
    $('#eventsPageContainerInner #match-page').removeClass('show').addClass('hide');
    $('#eventsPageContainerInner #nav-page').removeClass('hide').addClass('show');
});