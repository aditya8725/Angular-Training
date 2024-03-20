//class factorial
var factorialdemo = /** @class */ (function () {
    function factorialdemo(numm1) {
        this.numm1 = numm1;
    }
    factorialdemo.prototype.fact = function () {
        var fact = 1;
        for (var i = 1; i <= this.numm1; i++) {
            fact = fact * i;
        }
        console.log(fact);
    };
    return factorialdemo;
}());
var objf = new factorialdemo(5);
objf.fact();
