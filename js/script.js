$(document).ready(function() {

    $('.main_body_container').css('height', window.innerHeight + 'px');

    $('.navbar_menu_entry').click(function(event) {

        $('.main_body_container').addClass('push_back');
        $('.sidebar').addClass('sidebar_show');
    });

    $('.navbar_menu_back_button').click(function(event) {
        $('.main_body_container').removeClass('push_back');
        $('.sidebar').removeClass('sidebar_show');
    });
});
