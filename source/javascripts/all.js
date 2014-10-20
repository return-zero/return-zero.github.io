//= require_tree .

$(function () {
    var arr = [];
    $('.clearfix').each(function() {
        arr.push($(this).html());
    });

    arr.sort(function() {
        return Math.random() - Math.random();
    });

    $('.clearfix').empty();
    for (var i = 0; i < arr.length; i++) {
        $('clearfix').append(arr[i]);
    }
});
