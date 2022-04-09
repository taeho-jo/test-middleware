(function(w, d, a){
    console.log('code 삽입 완료.')
    w.__beusablerumclient__ = {
        load : function(src){
            var b = d.createElement("script");
            b.src = src; b.async=true; b.type = "text/javascript";
            d.getElementsByTagName("head")[0].appendChild(b);
        }
    };w.__beusablerumclient__.load(a);
})(window, document, "//rum.beusable.net/script/b220408e125654u410/c60dce1efa");