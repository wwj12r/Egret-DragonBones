var inLib = inLib || {};
(function (context, inLib) {
   inLib.track = function(seed) {
     var prefix = window.location.protocol + '//stats1.jiuyan.info/onepiece/router.html?action='
     var append = '_host=h5.in66.com&_token=' + inLib.com.getToken() 
     var img = new Image()
     img.src =  prefix + seed + append 
   } 
})(window, inLib)