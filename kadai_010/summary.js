$(function () {
    // id属性がchange-colorの要素がクリックされたら
    $('#change-color').on('click', function () {
        // 文字色を変える
        $('#target').css('color', 'red');
    });

    // id属性がchange-textの要素がクリックされたら
    $('#change-text').on('click', function () {
        // 文字内容を変える
        $('#target').text('Hello!');
    });

    // id属性がfade-outの要素がクリックされたら
    $('#fade-out').on('click', function () {
        // フェードアウトで文字が消える
        $('#target').fadeOut();
    });

    // id属性がfade-inの要素がクリックされたら
    $('#fade-in').on('click', function () {
        // フェードインで文字が現れる
        $('#target').fadeIn();
    });
});