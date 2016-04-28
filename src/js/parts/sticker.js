$(function() {
    $('.btn_plus').on('click', function(e) {
        e.preventDefault();
        $('.wall').append(
            '<div class="sticker">' +
                '<div class="sticker__top"></div>' +
                '<div class="sticker__center"></div>' +
                '<div class="sticker__bottom">' +
                '<a href="#" class="btn_remove"></a>' +
                '</div>' +
            '</div>'
        );
    });


    $('.btn_remove').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.sticker').remove();
    });
});