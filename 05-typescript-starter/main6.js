var multiplication = /** @class */ (function () {
    function multiplication(numm1) {
        this.numm1 = numm1;
    }
    multiplication.prototype.multi = function () {
        for (var i = 1; i <= 10; i++) {
            console.log(this.numm1 * i);
            console.log("--------------------");
            console.log("".concat(this.numm1, " * ").concat(i, " = ").concat(this.numm1));
        }
    };
    return multiplication;
}());
var mulobj = new multiplication(5);
mulobj.multi();
