//->utils:整个项目的公共方法库(单例模式封装)
var utils = (function () {

    //->toArray:converts a like array into an array
    function toArray(likeAry) {
        var ary = [];
        try {
            ary = [].slice.call(likeAry);
        } catch (e) {
            var len = likeAry.length;
            for (var i = 0; i < len; i++) {
                ary[ary.length] = likeAry[i];
            }
        }
        return ary;
    }


    return {
        toArray: toArray
    }
})();