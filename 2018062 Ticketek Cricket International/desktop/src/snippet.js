$('.sectionTitle').parent().replaceWith(html);

$('#eventsPageContainerInner .tab-item').on('click', function (e) {
    $('#eventsPageContainerInner .tab-item').removeClass('active');
    $(this).addClass('active');
    var current = $(this).data('attr');
    $("#eventsPageContainerInner .match-container").children().removeClass('show').addClass('hide');
    $("#eventsPageContainerInner .match-container").find('#' + current).addClass('show').removeClass('hide');
});