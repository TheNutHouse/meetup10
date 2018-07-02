var MODULE = (function () {
    var uname, email, pass,n;

    function select(el) {
        return document.querySelector(el);
    }

    function attachEvent(type, fn, ...el) {
        el.forEach((data) => {
            data.addEventListener(type, fn);
        })
    }

    function freezeForSeconds() {
        var ms = n + new Date().getTime();
        while (new Date() < ms) {}
        console.log("Finished Request");
    }

    function init(u, e, p, sec) {
        uname = select(u);
        email = select(e);
        pass = select(p);
        n=sec;
        attachEvent("click",freezeForSeconds,uname, email, pass);
    }
    var publicApi = {
        init: function () {
            init.apply(null, Array.from(arguments));
        }
    }
    return publicApi;
})();
MODULE.init(".user",".email",".pass",5000);