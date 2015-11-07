//生成随机密码
function randomString(type, length) {　　
    length = length || 32;
    var arr = type.split(',');
    var _chars = '';

    arr[0] == 1 && (_chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    arr[1] == 1 && (_chars += 'abcdefghijklmnopqrstuvwxyz');
    arr[2] == 1 && (_chars += '0123456789');
    arr[3] == 1 && (_chars += '!@#$%^&*_');

    _chars = _chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    var maxPos = _chars.length;　　
    var pwd = '';　　
    for (i = 0; i < length; i++) {　　　　
        pwd += _chars.charAt(Math.floor(Math.random() * maxPos));　　
    }　　
    return pwd;
}
