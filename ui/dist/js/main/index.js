System.register(['angular'], function(exports_1) {
    var TestController;
    return {
        setters:[
            function (_) {}],
        execute: function() {
            TestController = (function () {
                function TestController() {
                    this.hello = 'home';
                }
                return TestController;
            })();
            exports_1("default",TestController);
        }
    }
});
