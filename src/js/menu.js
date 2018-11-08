(function($){
    $(function() {
        $('.btn__menu').on('click', function() {
            $(this).closest('.menu').toggleClass('menu-open');
        });
    });
})(jQuery);