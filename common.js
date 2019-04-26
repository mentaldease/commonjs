var UTILS = {
    addCss: function (str) {
        var style = document.createElement('style');
        style.textContent = str;
        document.head.appendChild(style);
    },
    getScript: function (src) {
        var script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    },
    addScript: function (js) {
        var oHead = document.getElementsByTagName('HEAD')[0],
            oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.text = js;
        oHead.appendChild(oScript);
    },
    addDom: function (html, callback) {
        var div = document.createElement('div');
        div.innerHTML = html;
        callback.call(div, div);
        document.body.appendChild(div);
    },
    addDomObj: function (html, obj) {
        obj.before(html);
    },
    getCookie: function (ae) {
        return (document.cookie.match(new RegExp('(^' + ae + '| ' + ae + ')=([^;]*)')) == null) ? '' : RegExp.$2;
    },
    getHashCode: function (str, caseSensitive) {
        if (!caseSensitive) {
            str = str.toLowerCase();
        }
        var hash = 1315423911, i, ch;
        for (i = str.length - 1; i >= 0; i--) {
            ch = str.charCodeAt(i);
            hash ^= ((hash << 5) + ch + (hash >> 2));
        }
        return (hash & 0x7FFFFFFF);
    }
}
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    result = result.replace(new RegExp("({" + key + "})", "g"), args[key]);
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                    result = result.replace(new RegExp("({)" + i + "(})", "g"), arguments[i]);
                }
            }
        }
    }
    return result;
}

//ljs.addAliases
var JSLibs = {
    l: "https://raw.githubusercontent.com/mentaldease/commonjs/master/l.min.js",
    jQuery: "https://libs.cdnjs.net/jquery/3.4.0/jquery.min.js",
    layer:['https://libs.cdnjs.net/layer/2.3/skin/layer.css',
        'https://libs.cdnjs.net/layer/2.3/layer.js'],
    hotkeys:'https://raw.githubusercontent.com/mentaldease/commonjs/master/jquery.hotkeys.js',
}
