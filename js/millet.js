jQuery(document).ready(function($) {
    $('#tools-1 .message').hide();
    $('#tools-1 input[type="button"]').click(function() {
        var arr = [];
        $('#tools-1 table tr td').find('input[type="checkbox"]').each(function(index, el) {
            var obj = $(this);
            var ck = obj.is(':checked') ? 1 : 0;
            arr.push(ck);
        });
        var type = arr.join(',');
        //console.log(parseInt(type));
        if (parseInt(type) == 0) {
            $('#tools-1-pass').val('');
            $('#tools-1 .message').text('请选择所用的字符');
            $('#tools-1 .message').fadeIn('100');

            setTimeout("$('#tools-1 .message').fadeOut('100')", 1000);
            return false;
        }
        var len = $('#tools-1 table tr td').find('input[type="number"]').val();
        var str = randomString(type, len);

        $('#tools-1-pass').val(str);
        $('#tools-1-pass').click();
        $("#list_pass").append('<option value="' + str + '"></option>');

    });
    $('#tools-1-pass').click(function() {
        $(this).select();
        document.execCommand("Copy");
        $('#tools-1 .message').text('已复制到粘贴板上');
        $('#tools-1 .message').fadeIn('100');
        setTimeout("$('#tools-1 .message').fadeOut('100')", 1000);
    });

});
