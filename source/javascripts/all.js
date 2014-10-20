//= require_tree .

$(function () {
    var arr = [];
    $('.clearfix div').each(function() {
        arr.push($(this).html());
    });

    arr.sort(function() {
        return Math.random() - Math.random();
    });

    $('.clearfix').empty();
    for (var i = 0; i < arr.length; i++) {
        $('clearfix').append('<div class="col-md-6 col-xs-12 col-lg-3 text-center">' + arr[i] + '</div>');
    }
});
