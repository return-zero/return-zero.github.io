//= require_tree .

$(function () {
    var arr = [];
    $('.member div').each(function() {
        arr.push($(this).html());
    });

    arr.sort(function() {
        return Math.random() - Math.random();
    });

    $('.member').empty();
    for (var i = 0; i < arr.length; i++) {
        $('.member').append('<div class="col-xs-12 col-md-6 col-lg-3 text-center">' + arr[i] + '</div>');
    }
});
